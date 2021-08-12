import {
  Data,
  IDViewer,
  AllowIfViewerHasIdentityPrivacyPolicy
} from "@snowtop/ent";
import { Validator } from "@snowtop/ent/action";

import { QuestionVote } from "src/ent";
import { QuestionVoteVoterValidator } from "src/ent/question_vote/actions/validators/question_event_validators";
import {
  CreateQuestionVoteActionBase,
  QuestionVoteCreateInput,
} from "src/ent/question_vote/actions/generated/create_question_vote_action_base";

export { QuestionVoteCreateInput };

export default class CreateQuestionVoteAction extends CreateQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.id);
  }

  validators: Validator<QuestionVote>[] = [new QuestionVoteVoterValidator()];
}
