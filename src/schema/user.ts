import {
  BaseEntSchema,
  Edge,
  Field,
  IntegerType,
  StringType,
  Action,
  ActionOperation,
  requiredField,
} from "@snowtop/ent/schema";

export default class User extends BaseEntSchema {
  fields: Field[] = [
    StringType({ name: "FirstName" }),
    StringType({ name: "LastName" }),
    IntegerType({ name: "Reputation", nullable: false, defaultValueOnCreate: () => 0 }),
  ];

  edges: Edge[] = [
    {
      name: "authoredQuestions",
      schemaName: "Question",
    },
    {
      name: "authoredAnswers",
      schemaName: "Answer",
    },
    {
      name: "authoredQuestionComments",
      schemaName: "QuestionComment",
    },
    {
      name: "authoredAnswerComments",
      schemaName: "AnswerComment",
    },
    {
      name: "questionPrivateNotes",
      schemaName: "QuestionPrivateNote",
    },
    {
      name: "questionsVoted",
      schemaName: "QuestionVote",
    },
    {
      name: "answersVoted",
      schemaName: "AnswerVote",
    },
    {
      name: "authenticationDetails",
      schemaName: "UserAuthentication",
    },
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["FirstName", "LastName"],
      actionOnlyFields: [
        {
          name: "EmailAddress", type: "String",
        },
        {
          name: "Password", type: "String",
        },
      ],
    },
    {
      operation: ActionOperation.Edit,
      actionName: "EditUserReputationAction",
      hideFromGraphQL: true,
      fields: [requiredField("Reputation")],
    },
  ];
}