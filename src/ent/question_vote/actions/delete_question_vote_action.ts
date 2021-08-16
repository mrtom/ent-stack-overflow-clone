import { Trigger } from "@snowtop/ent/action";

import { Question, QuestionVote, User, VoteType } from "src/ent";
import { DeleteQuestionVoteActionBase } from "src/ent/question_vote/actions/generated/delete_question_vote_action_base";
import { QuestionVoteBuilder, QuestionVoteInput } from "src/ent/question_vote/actions/question_vote_builder";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

import { AllowIfViewerVoterPrivacyPolicy } from "src/privacy/voter";
import { UserReputationAdminViewer } from "src/privacy/userReputation";
export default class DeleteQuestionVoteAction extends DeleteQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerVoterPrivacyPolicy;
  };

  triggers: Trigger<QuestionVote>[] = [
    {
      async changeset(builder: QuestionVoteBuilder, input: {}) {
        const viewer = builder.viewer;
        const viewerID = viewer.viewerID;
        const vote = builder.existingEnt;
        const questionIDOrBuider = builder.getNewQuestionIDValue();

        if (!viewerID) {
          throw new Error("Could not load viewer");
        }

        if (!vote) {
          throw new Error("Could not load vote");
        }

        if (!questionIDOrBuider || builder.isBuilder(questionIDOrBuider)) {
          throw new Error("Could not load questionID or builder");
        }

        const question = await Question.loadX(viewer, questionIDOrBuider);
        const questionAuthorID = question.authorID;
        const questionAuthor = await User.loadX(viewer, questionAuthorID);

        const reputationChange =
          vote.voteType.toUpperCase() == VoteType.Up.toUpperCase() ? -10 : 10;

        const viewerWithEditReputationPermission = new UserReputationAdminViewer(viewerID);
        return await EditUserReputationAction.create(
          viewerWithEditReputationPermission,
          questionAuthor,
          {
            reputation: questionAuthor.reputation + reputationChange
          }
        ).changeset();
      },
    },
  ];
}
