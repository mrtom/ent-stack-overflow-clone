// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
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
import { Answer, Question, User } from "src/ent/";
import {
  AnswerBuilder,
  AnswerInput,
} from "src/ent/answer/actions/answer_builder";

export interface AnswerCreateInput {
  body: string;
  questionID: ID | Builder<Question>;
  authorID: ID | Builder<User>;
}

export class CreateAnswerActionBase implements Action<Answer> {
  public readonly builder: AnswerBuilder;
  public readonly viewer: Viewer;
  protected input: AnswerCreateInput;

  constructor(viewer: Viewer, input: AnswerCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new AnswerBuilder(this.viewer, WriteOperation.Insert, this);
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<Answer>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<Answer | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<Answer> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends CreateAnswerActionBase>(
    this: new (viewer: Viewer, input: AnswerCreateInput) => T,
    viewer: Viewer,
    input: AnswerCreateInput,
  ): CreateAnswerActionBase {
    return new this(viewer, input);
  }
}
