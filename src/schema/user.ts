import {
  BaseEntSchema,
  Edge,
  Field,
  StringType,
  Action,
  ActionOperation
} from "@lolopinto/ent/schema";
import { EmailType } from "@lolopinto/ent-email";
import { PasswordType } from "@lolopinto/ent-password";

export default class User extends BaseEntSchema {
  fields: Field[] = [
    StringType({ name: "FirstName" }),
    StringType({ name: "LastName" }),
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
  ];

  actions: Action[] = [
    {
      operation: ActionOperation.Create,
      fields: ["FirstName", "LastName", "EmailAddress", "Password"],
    }
  ];
}