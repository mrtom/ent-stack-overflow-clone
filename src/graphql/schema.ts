// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLSchema } from "graphql";
import {
  AnswerAddAuthorInputType,
  AnswerAddAuthorPayloadType,
} from "src/graphql/mutations/generated/answer/answer_add_author_type";
import {
  AnswerCreateInputType,
  AnswerCreatePayloadType,
} from "src/graphql/mutations/generated/answer/answer_create_type";
import {
  AnswerDeleteInputType,
  AnswerDeletePayloadType,
} from "src/graphql/mutations/generated/answer/answer_delete_type";
import {
  AnswerEditInputType,
  AnswerEditPayloadType,
} from "src/graphql/mutations/generated/answer/answer_edit_type";
import {
  AnswerRemoveAuthorInputType,
  AnswerRemoveAuthorPayloadType,
} from "src/graphql/mutations/generated/answer/answer_remove_author_type";
import {
  AnswerCommentAddAuthorInputType,
  AnswerCommentAddAuthorPayloadType,
} from "src/graphql/mutations/generated/answer_comment/answer_comment_add_author_type";
import {
  AnswerCommentCreateInputType,
  AnswerCommentCreatePayloadType,
} from "src/graphql/mutations/generated/answer_comment/answer_comment_create_type";
import {
  AnswerCommentDeleteInputType,
  AnswerCommentDeletePayloadType,
} from "src/graphql/mutations/generated/answer_comment/answer_comment_delete_type";
import {
  AnswerCommentEditInputType,
  AnswerCommentEditPayloadType,
} from "src/graphql/mutations/generated/answer_comment/answer_comment_edit_type";
import {
  AnswerCommentRemoveAuthorInputType,
  AnswerCommentRemoveAuthorPayloadType,
} from "src/graphql/mutations/generated/answer_comment/answer_comment_remove_author_type";
import { MutationType } from "src/graphql/mutations/generated/mutation_type";
import {
  QuestionAddAuthorInputType,
  QuestionAddAuthorPayloadType,
} from "src/graphql/mutations/generated/question/question_add_author_type";
import {
  QuestionCreateInputType,
  QuestionCreatePayloadType,
} from "src/graphql/mutations/generated/question/question_create_type";
import {
  QuestionDeleteInputType,
  QuestionDeletePayloadType,
} from "src/graphql/mutations/generated/question/question_delete_type";
import {
  QuestionEditInputType,
  QuestionEditPayloadType,
} from "src/graphql/mutations/generated/question/question_edit_type";
import {
  QuestionRemoveAuthorInputType,
  QuestionRemoveAuthorPayloadType,
} from "src/graphql/mutations/generated/question/question_remove_author_type";
import {
  QuestionCommentAddAuthorInputType,
  QuestionCommentAddAuthorPayloadType,
} from "src/graphql/mutations/generated/question_comment/question_comment_add_author_type";
import {
  QuestionCommentCreateInputType,
  QuestionCommentCreatePayloadType,
} from "src/graphql/mutations/generated/question_comment/question_comment_create_type";
import {
  QuestionCommentDeleteInputType,
  QuestionCommentDeletePayloadType,
} from "src/graphql/mutations/generated/question_comment/question_comment_delete_type";
import {
  QuestionCommentEditInputType,
  QuestionCommentEditPayloadType,
} from "src/graphql/mutations/generated/question_comment/question_comment_edit_type";
import {
  QuestionCommentRemoveAuthorInputType,
  QuestionCommentRemoveAuthorPayloadType,
} from "src/graphql/mutations/generated/question_comment/question_comment_remove_author_type";
import {
  QuestionPrivateNoteAddAuthorInputType,
  QuestionPrivateNoteAddAuthorPayloadType,
} from "src/graphql/mutations/generated/question_private_note/question_private_note_add_author_type";
import {
  QuestionPrivateNoteCreateInputType,
  QuestionPrivateNoteCreatePayloadType,
} from "src/graphql/mutations/generated/question_private_note/question_private_note_create_type";
import {
  QuestionPrivateNoteDeleteInputType,
  QuestionPrivateNoteDeletePayloadType,
} from "src/graphql/mutations/generated/question_private_note/question_private_note_delete_type";
import {
  QuestionPrivateNoteEditInputType,
  QuestionPrivateNoteEditPayloadType,
} from "src/graphql/mutations/generated/question_private_note/question_private_note_edit_type";
import {
  QuestionPrivateNoteRemoveAuthorInputType,
  QuestionPrivateNoteRemoveAuthorPayloadType,
} from "src/graphql/mutations/generated/question_private_note/question_private_note_remove_author_type";
import {
  UserCreateInputType,
  UserCreatePayloadType,
} from "src/graphql/mutations/generated/user/user_create_type";
import { QueryType } from "src/graphql/resolvers/generated/query_type";
import {
  AnswerCommentToAuthorsConnectionType,
  AnswerCommentType,
  AnswerToAuthorsConnectionType,
  AnswerToCommentsConnectionType,
  AnswerType,
  QuestionCommentToAuthorsConnectionType,
  QuestionCommentType,
  QuestionPrivateNoteToAuthorsConnectionType,
  QuestionPrivateNoteType,
  QuestionToAnswersConnectionType,
  QuestionToAuthorsConnectionType,
  QuestionToCommentsConnectionType,
  QuestionToPrivateNotesConnectionType,
  QuestionType,
  UserToAuthorToAuthoredAnswerCommentsConnectionType,
  UserToAuthorToAuthoredAnswersConnectionType,
  UserToAuthorToAuthoredQuestionCommentsConnectionType,
  UserToAuthorToAuthoredQuestionsConnectionType,
  UserToAuthoredAnswerCommentsConnectionType,
  UserToAuthoredAnswersConnectionType,
  UserToAuthoredQuestionCommentsConnectionType,
  UserToAuthoredQuestionsConnectionType,
  UserToQuestionPrivateNotesConnectionType,
  UserToUserQuestionPrivateNotesConnectionType,
  UserType,
  ViewerTypeType,
} from "./resolvers";

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: [
    AnswerCommentType,
    AnswerType,
    QuestionCommentType,
    QuestionPrivateNoteType,
    QuestionType,
    UserType,
    AnswerCommentToAuthorsConnectionType(),
    AnswerToAuthorsConnectionType(),
    AnswerToCommentsConnectionType(),
    QuestionCommentToAuthorsConnectionType(),
    QuestionPrivateNoteToAuthorsConnectionType(),
    QuestionToAnswersConnectionType(),
    QuestionToAuthorsConnectionType(),
    QuestionToCommentsConnectionType(),
    QuestionToPrivateNotesConnectionType(),
    UserToAuthorToAuthoredAnswerCommentsConnectionType(),
    UserToAuthorToAuthoredAnswersConnectionType(),
    UserToAuthorToAuthoredQuestionCommentsConnectionType(),
    UserToAuthorToAuthoredQuestionsConnectionType(),
    UserToAuthoredAnswerCommentsConnectionType(),
    UserToAuthoredAnswersConnectionType(),
    UserToAuthoredQuestionCommentsConnectionType(),
    UserToAuthoredQuestionsConnectionType(),
    UserToQuestionPrivateNotesConnectionType(),
    UserToUserQuestionPrivateNotesConnectionType(),
    ViewerTypeType,
    AnswerAddAuthorInputType,
    AnswerAddAuthorPayloadType,
    AnswerCommentAddAuthorInputType,
    AnswerCommentAddAuthorPayloadType,
    AnswerCommentCreateInputType,
    AnswerCommentCreatePayloadType,
    AnswerCommentDeleteInputType,
    AnswerCommentDeletePayloadType,
    AnswerCommentEditInputType,
    AnswerCommentEditPayloadType,
    AnswerCommentRemoveAuthorInputType,
    AnswerCommentRemoveAuthorPayloadType,
    AnswerCreateInputType,
    AnswerCreatePayloadType,
    AnswerDeleteInputType,
    AnswerDeletePayloadType,
    AnswerEditInputType,
    AnswerEditPayloadType,
    AnswerRemoveAuthorInputType,
    AnswerRemoveAuthorPayloadType,
    QuestionAddAuthorInputType,
    QuestionAddAuthorPayloadType,
    QuestionCommentAddAuthorInputType,
    QuestionCommentAddAuthorPayloadType,
    QuestionCommentCreateInputType,
    QuestionCommentCreatePayloadType,
    QuestionCommentDeleteInputType,
    QuestionCommentDeletePayloadType,
    QuestionCommentEditInputType,
    QuestionCommentEditPayloadType,
    QuestionCommentRemoveAuthorInputType,
    QuestionCommentRemoveAuthorPayloadType,
    QuestionCreateInputType,
    QuestionCreatePayloadType,
    QuestionDeleteInputType,
    QuestionDeletePayloadType,
    QuestionEditInputType,
    QuestionEditPayloadType,
    QuestionPrivateNoteAddAuthorInputType,
    QuestionPrivateNoteAddAuthorPayloadType,
    QuestionPrivateNoteCreateInputType,
    QuestionPrivateNoteCreatePayloadType,
    QuestionPrivateNoteDeleteInputType,
    QuestionPrivateNoteDeletePayloadType,
    QuestionPrivateNoteEditInputType,
    QuestionPrivateNoteEditPayloadType,
    QuestionPrivateNoteRemoveAuthorInputType,
    QuestionPrivateNoteRemoveAuthorPayloadType,
    QuestionRemoveAuthorInputType,
    QuestionRemoveAuthorPayloadType,
    UserCreateInputType,
    UserCreatePayloadType,
  ],
});
