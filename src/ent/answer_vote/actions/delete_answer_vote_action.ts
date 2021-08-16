import { Trigger } from "@snowtop/ent/action";

import { Answer, AnswerVote, User, VoteType } from "src/ent";
import { DeleteAnswerVoteActionBase } from "src/ent/answer_vote/actions/generated/delete_answer_vote_action_base";
import { AnswerVoteBuilder, AnswerVoteInput } from "src/ent/answer_vote/actions/answer_vote_builder";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

import { AllowIfViewerVoterPrivacyPolicy } from "src/privacy/voter";
import { UserReputationAdminViewer } from "src/privacy/userReputation";

export default class DeleteAnswerVoteAction extends DeleteAnswerVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerVoterPrivacyPolicy;
  };

  triggers: Trigger<AnswerVote>[] = [
    {
      async changeset(builder: AnswerVoteBuilder, input: {}) {
        const viewer = builder.viewer;
        const viewerID = viewer.viewerID;
        const vote = builder.existingEnt;
        const answerIDOrBuider = builder.getNewAnswerIDValue();

        if (!viewerID) {
          throw new Error("Could not load viewer");
        }

        if (!vote) {
          throw new Error("Could not load vote");
        }

        if (!answerIDOrBuider || builder.isBuilder(answerIDOrBuider)) {
          throw new Error("Could not load questionID or builder");
        }

        const answer = await Answer.loadX(viewer, answerIDOrBuider);
        const answerAuthorID = answer.authorID;
        const questionAuthor = await User.loadX(viewer, answerAuthorID);

        const reputationChange =
          vote.answerVoteType.toUpperCase() == VoteType.Up.toUpperCase() ? -10 : 10;

        const viewerWithEditReputationPermission = new UserReputationAdminViewer(viewerID);
        const user = await User.loadX(viewer, answerAuthorID);
        return await EditUserReputationAction.create(
          viewerWithEditReputationPermission,
          user, {
            reputation: user.reputation + reputationChange
          }
        ).changeset();
      },
    },
  ];
}
