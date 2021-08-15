import {
  AlwaysDenyRule,
  AllowIfViewerEqualsRule,
  PrivacyPolicy,
} from "@snowtop/ent"

import { UserAuthenticationBase } from "src/ent/internal";

import { AllowIfOmniRule } from "src/privacy/omni";

export class UserAuthentication extends UserAuthenticationBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      new AllowIfViewerEqualsRule(this.userID),
      AlwaysDenyRule,
    ],
  };
}
