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
} from "@lolopinto/ent/schema/";

/// explicit schema
export default class Question extends BaseEntSchema implements Schema {
  fields: Field[] = [
    StringType({ name: "title" }),
    StringType({ name: "questionBody" }),
    BooleanType({ name: "answered", nullable: false, defaultValueOnCreate: () => false}),
    UUIDType({
      name: "authorID",
      fieldEdge: { schema: "User", inverseEdge: "authoredQuestions" },
      storageKey: "user_id",
    }),
  ];

  edges: Edge[] = [
    {
      name: "authors",
      schemaName: "User",
      inverseEdge: {
        name: "authorToAuthoredQuestions",
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
      name: "answers",
      schemaName: "Answer",
    },
    {
      name: "comments",
      schemaName: "QuestionComment",
    },
  ];

  // create, edit, delete
  actions: Action[] = [
    {
      operation: ActionOperation.Mutations,
    },
  ];
}
