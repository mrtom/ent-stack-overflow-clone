import { Validator } from "@snowtop/ent/action";

import { Answer, AnswerVote } from "src/ent";
import { AnswerVoteBuilder } from "src/ent/answer_vote/actions/answer_vote_builder";

export class AnswerVoteVoterValidator implements Validator<AnswerVote> {
  async validate(builder: AnswerVoteBuilder): Promise<void> {
    const v = builder.viewer;
    const answerIDOrBuider = builder.getNewAnswerIDValue();

    if (!v || (v.viewerID === null || v.viewerID == undefined)) {
      throw new Error("Voter must have a valid viewer ID");
    }

    if (!answerIDOrBuider) {
      throw new Error("Answer Vote must supply an Answer ID");
    }

    if (builder.isBuilder(answerIDOrBuider)) {
      throw new Error("Answer Vote must supply an Answer ID");
    }

    const answer = await Answer.loadX(v, answerIDOrBuider);
    const answerAuthorID = answer.authorID;

    if (v.viewerID === answerAuthorID) {
      throw new Error("You cannot vote for your own Answer");
    }
  }
}