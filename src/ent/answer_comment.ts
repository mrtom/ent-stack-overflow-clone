import { AnswerCommentBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

export class AnswerComment extends AnswerCommentBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AlwaysAllowRule,
    ],
  };
}
