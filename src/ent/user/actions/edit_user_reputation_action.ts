import { AllowIfViewerRule, AlwaysDenyRule } from "@snowtop/ent";

import { AllowIfOmniRule } from "src/privacy/omni";
import { AllowIfUserReputationAdminRule } from "src/privacy/userReputation";
import {
  EditUserReputationActionBase,
  UserEditInput,
} from "src/ent/user/actions/generated/edit_user_reputation_action_base";

export { UserEditInput };

export default class EditUserReputationAction extends EditUserReputationActionBase {
  getPrivacyPolicy() {
    return {
      rules: [
        AllowIfOmniRule,
        AllowIfViewerRule,
        AllowIfUserReputationAdminRule,
        AlwaysDenyRule,
      ],
    };
  }
}
