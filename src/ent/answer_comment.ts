import { AnswerCommentBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@lolopinto/ent"

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
