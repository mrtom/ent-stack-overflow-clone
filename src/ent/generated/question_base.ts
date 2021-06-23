// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@lolopinto/ent";
import { Field, getFields } from "@lolopinto/ent/schema";
import {
  EdgeType,
  NodeType,
  QuestionToAnswersQuery,
  QuestionToAuthorsQuery,
  User,
} from "src/ent/internal";
import schema from "src/schema/question";

const tableName = "questions";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "title",
  "question_body",
  "user_id",
];

export class QuestionBase {
  readonly nodeType = NodeType.Question;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly title: string;
  readonly questionBody: string;
  readonly authorID: ID;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.title = data.title;
    this.questionBody = data.question_body;
    this.authorID = data.user_id;
  }

  // default privacyPolicy is Viewer can see themselves
  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, QuestionBase.loaderOptions.apply(this));
  }

  static async loadX<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, QuestionBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(viewer, QuestionBase.loaderOptions.apply(this), ...ids);
  }

  static async loadRawData<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await questionLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await questionLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends QuestionBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: questionLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (QuestionBase.schemaFields != null) {
      return QuestionBase.schemaFields;
    }
    return (QuestionBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return QuestionBase.getSchemaFields().get(key);
  }

  queryAnswers(): QuestionToAnswersQuery {
    return QuestionToAnswersQuery.query(this.viewer, this.id);
  }

  queryAuthors(): QuestionToAuthorsQuery {
    return QuestionToAuthorsQuery.query(this.viewer, this.id);
  }

  async loadAuthor(): Promise<User | null> {
    return loadEnt(this.viewer, this.authorID, User.loaderOptions());
  }

  loadAuthorX(): Promise<User> {
    return loadEntX(this.viewer, this.authorID, User.loaderOptions());
  }
}

export const questionLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
