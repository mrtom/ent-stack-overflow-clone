import {
  Schema,
  Action,
  Field,
  Edge,
  Index,
  BaseEntSchema,
  ActionOperation,
  BooleanType,
  StringType,
  UUIDType,
} from "@snowtop/ent/schema/";

/// explicit schema
export default class Question extends BaseEntSchema implements Schema {
  fields: Field[] = [
    StringType({ name: "title" }),
    StringType({ name: "questionBody" }),
    BooleanType({ name: "answered", nullable: false, defaultValueOnCreate: () => false }),
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
    {
      name: "privateNotes",
      schemaName: "QuestionPrivateNote",
    },
  ];

  // create, edit, delete
  actions: Action[] = [
    {
      operation: ActionOperation.Mutations,
    },
  ];

  indices: Index[] = [
    {
      name: "question_answered",
      columns: ["answered"],
    },
    {
      name: "question_author",
      columns: ["user_id"],
    },
  ];
}
