import { AnswerBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

export class Answer extends AnswerBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AlwaysAllowRule,
    ],
  };
}
