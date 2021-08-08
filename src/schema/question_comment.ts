import {
  Schema,
  Action,
  Field,
  Edge,
  BaseEntSchema,
  ActionOperation,
  StringType,
  UUIDType,
} from "@snowtop/ent/schema/";

/// explicit schema
export default class QuestionComment extends BaseEntSchema implements Schema {
  fields: Field[] = [
    StringType({ name: "body" }),
    UUIDType({
      name: "questionID",
      fieldEdge: { schema: "Question", inverseEdge: "comments" },
      storageKey: "question_id",
    }),
    UUIDType({
      name: "authorID",
      fieldEdge: { schema: "User", inverseEdge: "authoredQuestionComments" },
      storageKey: "user_id",
    }),
  ];

  edges: Edge[] = [
    {
      name: "authors",
      schemaName: "User",
      inverseEdge: {
        name: "authorToAuthoredQuestionComments",
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
