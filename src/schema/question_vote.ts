import {
  Action,
  ActionOperation,
  BaseEntSchema,
  Constraint,
  ConstraintType,
  Field,
  Edge,
  EnumType,
  Schema,
  UUIDType,
} from "@snowtop/ent/schema/";

export default class QuestionVote extends BaseEntSchema implements Schema {
  fields: Field[] = [
    EnumType({
      name: "VoteType",
      values: ['up', 'down'],
      createEnumType: true, // Uses enum type in Postgres
    }),
    UUIDType({
      name: "questionID",
      fieldEdge: { schema: "Question", inverseEdge: "votes" },
      storageKey: "question_id",
    }),
    UUIDType({
      name: "voterID",
      fieldEdge: { schema: "User", inverseEdge: "questionsVoted" },
      storageKey: "user_id",
      defaultToViewerOnCreate: true,
    }),
  ];

  edges: Edge[] = [
    {
      name: "voters",
      schemaName: "User",
      inverseEdge: {
        name: "voterToQuestionsVoted",
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

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["VoteType", "questionID"],
    },
    {
      operation: ActionOperation.Delete,
    },
  ];

  constraints: Constraint[] = [
    {
      name: "uniqueVoter",
      type: ConstraintType.Unique,
      columns: ["voterID", "questionID"],
    },
  ];
}
