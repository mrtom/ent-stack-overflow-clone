import { QuestionCommentBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

export class QuestionComment extends QuestionCommentBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AlwaysAllowRule,
    ],
  };
}
