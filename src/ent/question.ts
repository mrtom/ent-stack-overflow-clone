import { loadEntsFromClause } from "@snowtop/ent/core/ent";
import { QuestionBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

export class Question extends QuestionBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AlwaysAllowRule,
    ],
  };
}
