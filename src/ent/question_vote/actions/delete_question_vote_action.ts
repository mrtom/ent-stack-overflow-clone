import { DeleteQuestionVoteActionBase } from "src/ent/question_vote/actions/generated/delete_question_vote_action_base";

import { AllowIfViewerVoterPrivacyPolicy } from "src/privacy/voter";

export default class DeleteQuestionVoteAction extends DeleteQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerVoterPrivacyPolicy;
  }
}
