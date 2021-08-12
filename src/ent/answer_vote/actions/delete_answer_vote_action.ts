import { Trigger } from "@snowtop/ent/action";

import { Answer, AnswerVote, User, VoteType } from "src/ent";
import { DeleteAnswerVoteActionBase } from "src/ent/answer_vote/actions/generated/delete_answer_vote_action_base";
import { AnswerVoteBuilder, AnswerVoteInput } from "src/ent/answer_vote/actions/answer_vote_builder";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

import { AllowIfViewerVoterPrivacyPolicy } from "src/privacy/voter";

export default class DeleteAnswerVoteAction extends DeleteAnswerVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerVoterPrivacyPolicy;
  };

  triggers: Trigger<AnswerVote>[] = [
    {
      async changeset(builder: AnswerVoteBuilder, input: AnswerVoteInput) {
        const viewer = builder.viewer;
        const answerIDOrBuider = builder.getNewAnswerIDValue();

        if (!answerIDOrBuider || builder.isBuilder(answerIDOrBuider)) {
          // TODO: This is unexpected. We should log as such.
          return;
        }

        const answer = await Answer.loadX(viewer, answerIDOrBuider);
        const answerAuthorID = answer.authorID;

        const reputationChange = input.answerVoteType == VoteType.Up.toUpperCase() ? 10 : -10;

        const user = await User.loadX(viewer, answerAuthorID);
        return await EditUserReputationAction.create(builder.viewer, user, {
          reputation: user.reputation + reputationChange
        }).changeset();
      },
    },
  ];
}
