// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { AnswerAddAuthorType } from "src/graphql/mutations/generated/answer/answer_add_author_type";
import { AnswerCreateType } from "src/graphql/mutations/generated/answer/answer_create_type";
import { AnswerDeleteType } from "src/graphql/mutations/generated/answer/answer_delete_type";
import { AnswerEditType } from "src/graphql/mutations/generated/answer/answer_edit_type";
import { AnswerRemoveAuthorType } from "src/graphql/mutations/generated/answer/answer_remove_author_type";
import { QuestionAddAuthorType } from "src/graphql/mutations/generated/question/question_add_author_type";
import { QuestionCreateType } from "src/graphql/mutations/generated/question/question_create_type";
import { QuestionDeleteType } from "src/graphql/mutations/generated/question/question_delete_type";
import { QuestionEditType } from "src/graphql/mutations/generated/question/question_edit_type";
import { QuestionRemoveAuthorType } from "src/graphql/mutations/generated/question/question_remove_author_type";
import { UserCreateType } from "src/graphql/mutations/generated/user/user_create_type";
import { UserAuthJWTType } from "src/graphql/mutations/generated/user_auth_jwt_type";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    answerAddAuthor: AnswerAddAuthorType,
    answerCreate: AnswerCreateType,
    answerDelete: AnswerDeleteType,
    answerEdit: AnswerEditType,
    answerRemoveAuthor: AnswerRemoveAuthorType,
    questionAddAuthor: QuestionAddAuthorType,
    questionCreate: QuestionCreateType,
    questionDelete: QuestionDeleteType,
    questionEdit: QuestionEditType,
    questionRemoveAuthor: QuestionRemoveAuthorType,
    userAuthJWT: UserAuthJWTType,
    userCreate: UserCreateType,
  }),
});
