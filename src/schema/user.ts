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
import { EmailType } from "@snowtop/ent-email";
import { PasswordType } from "@snowtop/ent-password";

export default class User extends BaseEntSchema {
  fields: Field[] = [
    StringType({ name: "FirstName" }),
    StringType({ name: "LastName" }),
    IntegerType({ name: "Reputation", nullable: false, defaultValueOnCreate: () => 0 }),
    EmailType({ name: "EmailAddress", unique: true }),
    PasswordType({ name: "Password" }),
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
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["FirstName", "LastName", "EmailAddress", "Password"],
    },
    {
      operation: ActionOperation.Edit,
      actionName: "EditUserReputationAction",
      hideFromGraphQL: true,
      fields: [requiredField("Reputation")],
    },
  ];
}