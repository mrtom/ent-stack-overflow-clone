import { query, RequestContext } from "@lolopinto/ent";
import { loadEntsFromClause } from "@lolopinto/ent/core/ent";
import { gqlContextType, gqlQuery } from "@lolopinto/ent/graphql";
import { Question } from "src/ent";

export class QuestionResolver {
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