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

export default class AnswerVote extends BaseEntSchema implements Schema {
  fields: Field[] = [
    // TODO: This should be a single type shared with QuestionVote
    EnumType({
      name: "AnswerVoteType",
      values: ['up', 'down'],
      createEnumType: true, // Uses enum type in Postgres
    }),
    UUIDType({
      name: "answerID",
      fieldEdge: { schema: "Answer", inverseEdge: "votes" },
      storageKey: "answer_id",
    }),
    UUIDType({
      name: "voterID",
      fieldEdge: { schema: "User", inverseEdge: "answersVoted" },
      storageKey: "user_id",
    }),
  ];

  edges: Edge[] = [
    {
      name: "voters",
      schemaName: "User",
      inverseEdge: {
        name: "voterToAnswersVoted",
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
    },
    {
      operation: ActionOperation.Delete,
    },
  ];

  constraints: Constraint[] = [
    {
      name: "uniqueAnswerVoteVoter",
      type: ConstraintType.Unique,
      columns: ["voterID", "answerID"],
    },
  ];
}
