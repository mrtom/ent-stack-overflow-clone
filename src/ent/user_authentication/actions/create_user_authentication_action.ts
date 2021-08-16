import { Data, IDViewer, AlwaysAllowPrivacyPolicy } from "@snowtop/ent";

import { UserAuthentication } from "src/ent";
import {
  CreateUserAuthenticationActionBase,
  UserAuthenticationCreateInput,
} from "src/ent/user_authentication/actions/generated/create_user_authentication_action_base";

import { EntCreationObserver } from 'src/observers/EntCreationObserver';

export { UserAuthenticationCreateInput };

export default class CreateUserAuthenticationAction extends CreateUserAuthenticationActionBase {
  getPrivacyPolicy() {
    return AlwaysAllowPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.user_id);
  }

  observers = [
    new EntCreationObserver<UserAuthentication>(),
  ];
}
