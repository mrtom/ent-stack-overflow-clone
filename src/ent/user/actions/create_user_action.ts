import { Trigger } from "@snowtop/ent/action";
import { Data, IDViewer, AlwaysAllowPrivacyPolicy } from "@snowtop/ent";

import { User } from "src/ent";
import { UserBuilder } from "src/ent/user/actions/user_builder";

import CreateUserAuthenticationAction from "src/ent/user_authentication/actions/create_user_authentication_action";
import {
  CreateUserActionBase,
  UserCreateInput,
} from "src/ent/user/actions/generated/create_user_action_base";
import { EntCreationObserver } from 'src/observers/EntCreationObserver';

export { UserCreateInput };

export default class CreateUserAction extends CreateUserActionBase {
  getPrivacyPolicy() {
    return AlwaysAllowPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.id);
  }

  observers = [
    new EntCreationObserver<User>(),
  ];

  triggers: Trigger<User>[] = [
    {
      async changeset(builder: UserBuilder, input: UserCreateInput) {
        return await CreateUserAuthenticationAction.create(builder.viewer, {
          emailAddress: input.emailAddress,
          password: input.password,
          userID: builder,
        }).changeset();
      },
    },
  ];
}