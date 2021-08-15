import { GraphQLID } from "graphql";
import { ID, RequestContext } from "@snowtop/ent";
import { gqlArg, gqlContextType, gqlQuery } from "@snowtop/ent/graphql";
import { User, UserAuthentication } from "src/ent";

export class UserResolver {
  @gqlQuery({ name: "userByEmail", type: "User", nullable: true })
  async userByEmail(
    @gqlContextType() context: RequestContext,
    @gqlArg("emailAddress") emailAddress: string,
  ) {
    const userAuth = await UserAuthentication.loadFromEmailAddress(context.getViewer(), emailAddress);
    if (userAuth === null) {
      return null;
    }

    return await userAuth.loadUser();
  }

  @gqlQuery({ name: "user", type: "User", nullable: true })
  async user(
    @gqlContextType() context: RequestContext,
    @gqlArg("userID", { type: GraphQLID }) userID: ID,
  ) {
    return await User.load(context.getViewer(), userID);
  }
}