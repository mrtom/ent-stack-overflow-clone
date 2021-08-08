import { GraphQLID } from "graphql"

import {
  gqlArg,
  gqlContextType,
  gqlField,
  gqlInputObjectType,
  gqlMutation,
  gqlObjectType,
  encodeGQLID,
} from "@snowtop/ent/graphql"
import { ID, RequestContext } from "@snowtop/ent"
import { useAndVerifyAuthJWT } from "@snowtop/ent-passport";

import { User } from "src/ent/user";
import { ViewerType } from "src/graphql/resolvers/viewer";

@gqlInputObjectType()
class UserAuthJWTInput {
  @gqlField()
  emailAddress: string;
  @gqlField()
  password: string;
}

// TODO: In the RSVP example project these are generated automatically. Figure out how!
// TODO: Ideally we'd justs return the viewer rather than the viewer ID and the user separately.
// I tried to do this and couldn't get codegen to like it, I think because Viewer isn't an Ent and
// so the type system was complaining. Probably fixed in the same waas as the auto generated viewer
// stuff in the comment above
@gqlObjectType()
export class UserAuthJWTPayload {
  @gqlField()
  token: string;

  @gqlField({ type: ViewerType })
  viewer: ViewerType;
}

 export class AuthResolver {
   @gqlMutation({ name: "userAuthJWT", type: UserAuthJWTPayload })
   async userAuthJWT(
     @gqlContextType() context: RequestContext,
     @gqlArg("input") input: UserAuthJWTInput,
   ): Promise<UserAuthJWTPayload> {
     const [viewer, token] = await useAndVerifyAuthJWT(
       context,
       async () => {
         const data = await User.validateEmailPassword(
           input.emailAddress,
           input.password,
         );
         return data?.id;
       },
       {
         secretOrKey: "secret",
         signInOptions: {
           algorithm: "HS256",
           audience: "https://foo.com/website",
           issuer: "https://foo.com",
           expiresIn: "1h",
         },
       },
       User.loaderOptions(),
       // don't store this in session since we're using JWT here
       {
         session: false,
       },
     );
     if (!viewer) {
       throw new Error("not the right credentials");
     }
     const userEnt = await viewer?.viewer();
     if (!userEnt) {
       throw new Error("not the right credentials");
     }

     const user = await User.loadX(viewer, userEnt.id);

     return {
       viewer: new ViewerType(viewer),
       token: token,
     };
   }
}