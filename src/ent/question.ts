import { loadEntsFromClause } from "@lolopinto/ent/core/ent";
import { QuestionBase } from "src/ent/internal";

import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysAllowRule,
} from "@lolopinto/ent"

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
