import {
  AllowIfHasIdentity,
  AlwaysDenyRule,
  PrivacyPolicy,
} from "@snowtop/ent"

import { AnswerVoteBase } from "src/ent/internal";

import { AllowIfOmniRule } from "src/privacy/omni";

export class AnswerVote extends AnswerVoteBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfHasIdentity,
      AlwaysDenyRule,
    ],
  };
}
