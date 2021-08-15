import {
  PrivacyPolicy,
  AllowIfViewerHasIdentityPrivacyPolicy,
} from "@snowtop/ent";

import {
  CreateQuestionPrivateNoteActionBase,
  QuestionPrivateNoteCreateInput,
} from "src/ent/question_private_note/actions/generated/create_question_private_note_action_base";

export { QuestionPrivateNoteCreateInput };

export default class CreateQuestionPrivateNoteAction extends CreateQuestionPrivateNoteActionBase {
  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }
}
