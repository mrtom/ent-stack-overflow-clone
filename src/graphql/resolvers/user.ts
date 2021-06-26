import { GraphQLID } from "graphql";
import { ID, RequestContext } from "@lolopinto/ent";
import { gqlArg, gqlContextType, gqlQuery } from "@lolopinto/ent/graphql";
import { User } from "src/ent";

export class UserResolver {
  @gqlQuery({ name: "userByEmail", type: "User", nullable: true })
  async userByEmail(
    @gqlContextType() context: RequestContext,
    @gqlArg("emailAddress") emailAddress: string,
  ) {
    return await User.loadFromEmailAddress(context.getViewer(), emailAddress);
  }

  @gqlQuery({ name: "user", type: "User", nullable: true })
  async user(
    @gqlContextType() context: RequestContext,
    @gqlArg("userID", { type: GraphQLID }) userID: ID,
  ) {
    return await User.load(context.getViewer(), userID);
  }

  @gqlQuery({ name: "recentQuestions", type: "[Question]"})
  async user(
    @gqlContextType() context: RequestContext,
  ) {
    const unansweredQuestions = await loadEntsFromClause(
      context.getViewer(),
      query.Eq("answered", false),
      Question.loaderOptions(),
    );
    return unansweredQuestions.values().next().value;
  }
}