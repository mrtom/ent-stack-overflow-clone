import { Validator } from "@snowtop/ent/action";

import { Question, QuestionVote } from "src/ent";
import { QuestionVoteBuilder } from "src/ent/question_vote/actions/question_vote_builder";

export class QuestionVoteVoterValidator implements Validator<QuestionVote> {
  async validate(builder: QuestionVoteBuilder): Promise<void> {
    const v = builder.viewer;
    const questionIDOrBuider = builder.getNewQuestionIDValue();

    if (!v || (v.viewerID === null || v.viewerID == undefined)) {
      throw new Error("Voter must have a valid viewer ID");
    }

    if (!questionIDOrBuider) {
      throw new Error("Question Vote must supply a Question ID");
    }

    if (builder.isBuilder(questionIDOrBuider)) {
      throw new Error("Question Vote must supply a Question ID");
    }

    const question = await Question.loadX(v, questionIDOrBuider);
    const questionAuthorID = question.authorID;

    if (v.viewerID === questionAuthorID) {
      throw new Error("You cannot vote for your own Question");
    }
  }
}