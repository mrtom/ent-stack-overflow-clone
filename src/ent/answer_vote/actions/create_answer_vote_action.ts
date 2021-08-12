import {
  Data,
  IDViewer,
  AllowIfViewerHasIdentityPrivacyPolicy
} from "@snowtop/ent";
import { Trigger, Validator } from "@snowtop/ent/action";

import { Answer, AnswerVote, AnswerVoteType, User } from "src/ent";
import { AnswerVoteBuilder } from "src/ent/answer_vote/actions/answer_vote_builder";
import { AnswerVoteVoterValidator } from "src/ent/answer_vote/actions/validators/answer_vote_validators";
import {
  AnswerVoteCreateInput,
  CreateAnswerVoteActionBase,
} from "src/ent/answer_vote/actions/generated/create_answer_vote_action_base";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

export { AnswerVoteCreateInput };

export default class CreateAnswerVoteAction extends CreateAnswerVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.id);
  }

  validators: Validator<AnswerVote>[] = [new AnswerVoteVoterValidator()];

  triggers: Trigger<AnswerVote>[] = [
    {
      async changeset(builder: AnswerVoteBuilder, input: AnswerVoteCreateInput) {
        const viewer = builder.viewer;
        const answerIDOrBuider = builder.getNewAnswerIDValue();

        if (!answerIDOrBuider || builder.isBuilder(answerIDOrBuider)) {
          // TODO: This is unexpected. We should log as such.
          return;
        }

        const answer = await Answer.loadX(viewer, answerIDOrBuider);
        const answerAuthorID = answer.authorID;

        const reputationChange = input.answerVoteType == AnswerVoteType.Up.toUpperCase() ? 10 : -10;

        const user = await User.loadX(viewer, answerAuthorID);
        return await EditUserReputationAction.create(builder.viewer, user, {
          reputation: user.reputation + reputationChange
        }).changeset();
      },
    },
  ];
}
