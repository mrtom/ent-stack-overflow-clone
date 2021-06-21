import { GraphQLID } from "graphql"

import {
  gqlArg,
  gqlContextType,
  gqlField,
  gqlInputObjectType,
  gqlMutation,
  gqlObjectType,
  encodeGQLID,
} from "@lolopinto/ent/graphql"
import { ID, RequestContext } from "@lolopinto/ent"
import { useAndVerifyAuthJWT } from "@lolopinto/ent-passport";

import { User } from "src/ent/user";

@gqlInputObjectType()
class UserAuthJWTInput {
  @gqlField()
  emailAddress: string;
  @gqlField()
  password: string;
}

@gqlObjectType()
class UserAuthJWTPayload {
  @gqlField()
  token: string;

  @gqlField({ type: GraphQLID })
  viewerID: ID;
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
     const user = await viewer?.viewer();
     if (!user) {
       throw new Error("not the right credentials");
     }
     return {
       viewerID: encodeGQLID(user),
       token: token,
     };
   }
}