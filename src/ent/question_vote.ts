import {
  AllowIfHasIdentity,
  AlwaysDenyRule,
  PrivacyPolicy,
} from "@snowtop/ent"

import { QuestionVoteBase } from "src/ent/internal";

import { AllowIfOmniRule } from "src/privacy/omni";

export class QuestionVote extends QuestionVoteBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfHasIdentity,
      AlwaysDenyRule,
    ],
  };
}
