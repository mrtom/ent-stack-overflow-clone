import { QuestionPrivateNoteBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerEqualsRule,
  AlwaysDenyRule,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

export class QuestionPrivateNote extends QuestionPrivateNoteBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      new AllowIfViewerEqualsRule(this.authorID),
      AlwaysDenyRule,
    ],
  };
}
