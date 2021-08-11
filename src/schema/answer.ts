import {
  Schema,
  Action,
  Field,
  Edge,
  BaseEntSchema,
  ActionOperation,
  BooleanType,
  StringType,
  UUIDType,
  AssocEdgeGroup,
} from "@snowtop/ent/schema/";

/// explicit schema
export default class Answer extends BaseEntSchema implements Schema {
  fields: Field[] = [
    StringType({ name: "body" }),
    BooleanType({ name: "acceptedAnswer", defaultValueOnCreate: () => false }),
    UUIDType({
      name: "questionID",
      fieldEdge: { schema: "Question", inverseEdge: "answers" },
      storageKey: "question_id",
    }),
    UUIDType({
      name: "authorID",
      fieldEdge: { schema: "User", inverseEdge: "authoredAnswers" },
      storageKey: "user_id",
    }),
  ];

  edges: Edge[] = [
    {
      name: "authors",
      schemaName: "User",
      inverseEdge: {
        name: "authorToAuthoredAnswers",
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
    {
      name: "comments",
      schemaName: "AnswerComment",
    },
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["body", "questionID", "authorID"],
    },
    {
      operation: ActionOperation.Edit,
    },
    {
      operation: ActionOperation.Delete,
    },
  ];
}
