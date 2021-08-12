import { Trigger } from "@snowtop/ent/action";

import { Question, QuestionVote, User, VoteType } from "src/ent";
import { DeleteQuestionVoteActionBase } from "src/ent/question_vote/actions/generated/delete_question_vote_action_base";
import { QuestionVoteBuilder, QuestionVoteInput } from "src/ent/question_vote/actions/question_vote_builder";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

import { AllowIfViewerVoterPrivacyPolicy } from "src/privacy/voter";

export default class DeleteQuestionVoteAction extends DeleteQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerVoterPrivacyPolicy;
  };

  triggers: Trigger<QuestionVote>[] = [
    {
      async changeset(builder: QuestionVoteBuilder, input: QuestionVoteInput) {
        const viewer = builder.viewer;
        const questionIDOrBuider = builder.getNewQuestionIDValue();

        if (!questionIDOrBuider || builder.isBuilder(questionIDOrBuider)) {
          // TODO: This is unexpected. We should log as such.
          return;
        }

        const question = await Question.loadX(viewer, questionIDOrBuider);
        const questionAuthorID = question.authorID;

        const reputationChange = input.voteType == VoteType.Up.toUpperCase() ? 10 : -10;

        const user = await User.loadX(viewer, questionAuthorID);
        return await EditUserReputationAction.create(builder.viewer, user, {
          reputation: user.reputation + reputationChange
        }).changeset();
      },
    },
  ];
}
