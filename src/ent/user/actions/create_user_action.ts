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
    {
      observe: async (builder: UserBuilder, input: UserCreateInput): Promise<void> => {
        const emailAddress = input.emailAddress;
        const password = input.password;

        const newUserEnt = await builder.editedEnt();

        if (!newUserEnt) {
          throw new Error("Could not load new user ent, user authentication not created");
        }

        await CreateUserAuthenticationAction.create(
          builder.viewer,
          {
            emailAddress: emailAddress,
            password: password,
            userID: newUserEnt.id,
          }
        ).save();
      },
    },
    new EntCreationObserver<User>(),
  ];
}