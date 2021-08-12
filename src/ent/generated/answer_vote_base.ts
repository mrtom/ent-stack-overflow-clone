// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertDate,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  Answer,
  AnswerVoteToVotersQuery,
  EdgeType,
  NodeType,
  User,
} from "src/ent/internal";
import schema from "src/schema/answer_vote";

const tableName = "answer_votes";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "answer_vote_type",
  "answer_id",
  "user_id",
];

export enum AnswerVoteType {
  Up = "up",
  Down = "down",
}

export function getAnswerVoteTypeValues() {
  return [AnswerVoteType.Up, AnswerVoteType.Down];
}

export class AnswerVoteBase {
  readonly nodeType = NodeType.AnswerVote;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly answerVoteType: AnswerVoteType;
  readonly answerID: ID;
  readonly voterID: ID;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.answerVoteType = data.answer_vote_type;
    this.answerID = data.answer_id;
    this.voterID = data.user_id;
  }

  // default privacyPolicy is Viewer can see themselves
  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, AnswerVoteBase.loaderOptions.apply(this));
  }

  static async loadX<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, AnswerVoteBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(viewer, AnswerVoteBase.loaderOptions.apply(this), ...ids);
  }

  static async loadCustom<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return loadCustomEnts(
      viewer,
      AnswerVoteBase.loaderOptions.apply(this),
      query,
    );
  }

  static async loadCustomData<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      AnswerVoteBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await answerVoteLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await answerVoteLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends AnswerVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: answerVoteLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (AnswerVoteBase.schemaFields != null) {
      return AnswerVoteBase.schemaFields;
    }
    return (AnswerVoteBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return AnswerVoteBase.getSchemaFields().get(key);
  }

  queryVoters(): AnswerVoteToVotersQuery {
    return AnswerVoteToVotersQuery.query(this.viewer, this.id);
  }

  async loadAnswer(): Promise<Answer | null> {
    return loadEnt(this.viewer, this.answerID, Answer.loaderOptions());
  }

  loadAnswerX(): Promise<Answer> {
    return loadEntX(this.viewer, this.answerID, Answer.loaderOptions());
  }

  async loadVoter(): Promise<User | null> {
    return loadEnt(this.viewer, this.voterID, User.loaderOptions());
  }

  loadVoterX(): Promise<User> {
    return loadEntX(this.viewer, this.voterID, User.loaderOptions());
  }
}

export const answerVoteLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
