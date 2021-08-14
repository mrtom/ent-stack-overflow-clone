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
  requiredField,
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
      defaultToViewerOnCreate: true,
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
      name: "votes",
      schemaName: "QuestionVote",
    },
    {
      name: "privateNotes",
      schemaName: "QuestionPrivateNote",
    },
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["title", "questionBody"],
    },
    {
      operation: ActionOperation.Edit,
    },
    {
      operation: ActionOperation.Delete,
    },
    // Set answered / unanswered
    {
      operation: ActionOperation.Edit,
      actionName: "EditQuestionAnsweredAction",
      graphQLName: "questionAnsweredEdit",
      inputName: "EditQuestionAnsweredInput",
      fields: [requiredField("answered")],
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
