// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { AnswerVote } from "src/ent/";
import {
  AnswerVoteBuilder,
  AnswerVoteInput,
} from "src/ent/answer_vote/actions/answer_vote_builder";

export class DeleteAnswerVoteActionBase implements Action<AnswerVote> {
  public readonly builder: AnswerVoteBuilder;
  public readonly viewer: Viewer;
  protected answerVote: AnswerVote;

  constructor(viewer: Viewer, answerVote: AnswerVote) {
    this.viewer = viewer;
    this.builder = new AnswerVoteBuilder(
      this.viewer,
      WriteOperation.Delete,
      this,
      answerVote,
    );
    this.answerVote = answerVote;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerVoteInput {
    return {};
  }

  async changeset(): Promise<Changeset<AnswerVote>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<void> {
    await this.builder.save();
  }

  async saveX(): Promise<void> {
    await this.builder.saveX();
  }

  static create<T extends DeleteAnswerVoteActionBase>(
    this: new (viewer: Viewer, answerVote: AnswerVote) => T,
    viewer: Viewer,
    answerVote: AnswerVote,
  ): DeleteAnswerVoteActionBase {
    return new this(viewer, answerVote);
  }

  static async saveXFromID<T extends DeleteAnswerVoteActionBase>(
    this: new (viewer: Viewer, answerVote: AnswerVote) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<void> {
    let answerVote = await AnswerVote.loadX(viewer, id);
    return await new this(viewer, answerVote).saveX();
  }
}