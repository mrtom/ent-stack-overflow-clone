import {
  PrivacyPolicy,
  AllowIfViewerHasIdentityPrivacyPolicy,
} from "@snowtop/ent";

import {
  AnswerCreateInput,
  CreateAnswerActionBase,
} from "src/ent/answer/actions/generated/create_answer_action_base";

export { AnswerCreateInput };

export default class CreateAnswerAction extends CreateAnswerActionBase {
  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }
}
