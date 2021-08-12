import {
  Data,
  IDViewer,
  AllowIfViewerHasIdentityPrivacyPolicy
} from "@snowtop/ent";
import { Trigger, Validator } from "@snowtop/ent/action";

import { Question, QuestionVote, User, VoteType } from "src/ent";
import { QuestionVoteBuilder } from "src/ent/question_vote/actions/question_vote_builder";
import { QuestionVoteVoterValidator } from "src/ent/question_vote/actions/validators/question_vote_validators";
import {
  CreateQuestionVoteActionBase,
  QuestionVoteCreateInput,
} from "src/ent/question_vote/actions/generated/create_question_vote_action_base";
import EditUserReputationAction from "src/ent/user/actions/edit_user_reputation_action";

export { QuestionVoteCreateInput };

export default class CreateQuestionVoteAction extends CreateQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.id);
  }

  validators: Validator<QuestionVote>[] = [new QuestionVoteVoterValidator()];

  triggers: Trigger<QuestionVote>[] = [
    {
      async changeset(builder: QuestionVoteBuilder, input: QuestionVoteCreateInput) {
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
