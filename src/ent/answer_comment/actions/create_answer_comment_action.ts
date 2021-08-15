import {
  PrivacyPolicy,
  AllowIfViewerHasIdentityPrivacyPolicy,
} from "@snowtop/ent";

import {
  AnswerCommentCreateInput,
  CreateAnswerCommentActionBase,
} from "src/ent/answer_comment/actions/generated/create_answer_comment_action_base";

export { AnswerCommentCreateInput };

export default class CreateAnswerCommentAction extends CreateAnswerCommentActionBase {
  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }
}
