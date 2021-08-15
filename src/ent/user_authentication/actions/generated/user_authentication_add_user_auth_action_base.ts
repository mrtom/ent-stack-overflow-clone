// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  AssocEdgeInputOptions,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  WriteOperation,
} from "@snowtop/ent/action";
import { User, UserAuthentication } from "src/ent/";
import {
  UserAuthenticationBuilder,
  UserAuthenticationInput,
} from "src/ent/user_authentication/actions/user_authentication_builder";

export class UserAuthenticationAddUserAuthActionBase
  implements Action<UserAuthentication>
{
  public readonly builder: UserAuthenticationBuilder;
  public readonly viewer: Viewer;
  protected userAuthentication: UserAuthentication;

  constructor(viewer: Viewer, userAuthentication: UserAuthentication) {
    this.viewer = viewer;
    this.builder = new UserAuthenticationBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      userAuthentication,
    );
    this.userAuthentication = userAuthentication;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): UserAuthenticationInput {
    return {};
  }

  addUserAuth(...ids: ID[]): this;
  addUserAuth(...nodes: User[]): this;
  addUserAuth(...nodes: Builder<User>[]): this;
  addUserAuth(...nodes: ID[] | User[] | Builder<User>[]): this {
    nodes.forEach((node) => this.builder.addUserAuth(node));
    return this;
  }

  addUserAuthID(id: ID | Builder<User>, options?: AssocEdgeInputOptions): this {
    this.builder.addUserAuthID(id, options);
    return this;
  }
  async changeset(): Promise<Changeset<UserAuthentication>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<UserAuthentication | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<UserAuthentication> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends UserAuthenticationAddUserAuthActionBase>(
    this: new (viewer: Viewer, userAuthentication: UserAuthentication) => T,
    viewer: Viewer,
    userAuthentication: UserAuthentication,
  ): UserAuthenticationAddUserAuthActionBase {
    return new this(viewer, userAuthentication);
  }

  static async saveXFromID<T extends UserAuthenticationAddUserAuthActionBase>(
    this: new (viewer: Viewer, userAuthentication: UserAuthentication) => T,
    viewer: Viewer,
    id: ID,
    userAuthID: ID,
  ): Promise<UserAuthentication> {
    let userAuthentication = await UserAuthentication.loadX(viewer, id);
    return await new this(viewer, userAuthentication)
      .addUserAuth(userAuthID)
      .saveX();
  }
}
