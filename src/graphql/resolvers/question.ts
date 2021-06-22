import { query, RequestContext } from "@lolopinto/ent";
import { loadEntsFromClause } from "@lolopinto/ent/core/ent";
import { gqlArg, gqlContextType, gqlQuery } from "@lolopinto/ent/graphql";
import { Question } from "src/ent";

export class QuestionResolver {
  @gqlQuery({ name: "recentQuestions", type: "[Question]"})
  async user(
    @gqlContextType() context: RequestContext,
  ) {
    const ents = await loadEntsFromClause(
      context.getViewer(),
      query.Eq("title", "Hello World"),
      Question.loaderOptions(),
    );
    return ents.values().next().value;
  }
}