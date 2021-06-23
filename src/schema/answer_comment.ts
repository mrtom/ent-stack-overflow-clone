import {
  Schema,
  Action,
  Field,
  Edge,
  BaseEntSchema,
  ActionOperation,
  StringType,
  UUIDType,
} from "@lolopinto/ent/schema/";

/// explicit schema
export default class AnswerComment extends BaseEntSchema implements Schema {
  fields: Field[] = [
    StringType({ name: "body" }),
    UUIDType({
      name: "answerID",
      fieldEdge: { schema: "Answer", inverseEdge: "comments" },
      storageKey: "answer_id",
    }),
    UUIDType({
      name: "authorID",
      fieldEdge: { schema: "User", inverseEdge: "authoredAnswerComments" },
      storageKey: "user_id",
    }),
  ];

  edges: Edge[] = [
    {
      name: "authors",
      schemaName: "User",
      inverseEdge: {
        name: "authorToAuthoredAnswerComments",
      },
      edgeActions: [
        {
          operation: ActionOperation.AddEdge,
        },
        {
          operation: ActionOperation.RemoveEdge,
        },
      ],
    },
  ];

  // create, edit, delete
  actions: Action[] = [
    {
      operation: ActionOperation.Mutations,
    },
  ];
}
