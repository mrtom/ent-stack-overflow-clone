// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { AnswerAddAuthorType } from "src/graphql/mutations/generated/answer/answer_add_author_type";
import { AnswerCreateType } from "src/graphql/mutations/generated/answer/answer_create_type";
import { AnswerDeleteType } from "src/graphql/mutations/generated/answer/answer_delete_type";
import { AnswerEditType } from "src/graphql/mutations/generated/answer/answer_edit_type";
import { AnswerRemoveAuthorType } from "src/graphql/mutations/generated/answer/answer_remove_author_type";
import { AnswerCommentAddAuthorType } from "src/graphql/mutations/generated/answer_comment/answer_comment_add_author_type";
import { AnswerCommentCreateType } from "src/graphql/mutations/generated/answer_comment/answer_comment_create_type";
import { AnswerCommentDeleteType } from "src/graphql/mutations/generated/answer_comment/answer_comment_delete_type";
import { AnswerCommentEditType } from "src/graphql/mutations/generated/answer_comment/answer_comment_edit_type";
import { AnswerCommentRemoveAuthorType } from "src/graphql/mutations/generated/answer_comment/answer_comment_remove_author_type";
import { AnswerVoteAddVoterType } from "src/graphql/mutations/generated/answer_vote/answer_vote_add_voter_type";
import { AnswerVoteCreateType } from "src/graphql/mutations/generated/answer_vote/answer_vote_create_type";
import { AnswerVoteDeleteType } from "src/graphql/mutations/generated/answer_vote/answer_vote_delete_type";
import { AnswerVoteRemoveVoterType } from "src/graphql/mutations/generated/answer_vote/answer_vote_remove_voter_type";
import { QuestionAddAuthorType } from "src/graphql/mutations/generated/question/question_add_author_type";
import { QuestionAnsweredEditType } from "src/graphql/mutations/generated/question/question_answered_edit_type";
import { QuestionCreateType } from "src/graphql/mutations/generated/question/question_create_type";
import { QuestionDeleteType } from "src/graphql/mutations/generated/question/question_delete_type";
import { QuestionEditType } from "src/graphql/mutations/generated/question/question_edit_type";
import { QuestionRemoveAuthorType } from "src/graphql/mutations/generated/question/question_remove_author_type";
import { QuestionCommentAddAuthorType } from "src/graphql/mutations/generated/question_comment/question_comment_add_author_type";
import { QuestionCommentCreateType } from "src/graphql/mutations/generated/question_comment/question_comment_create_type";
import { QuestionCommentDeleteType } from "src/graphql/mutations/generated/question_comment/question_comment_delete_type";
import { QuestionCommentEditType } from "src/graphql/mutations/generated/question_comment/question_comment_edit_type";
import { QuestionCommentRemoveAuthorType } from "src/graphql/mutations/generated/question_comment/question_comment_remove_author_type";
import { QuestionPrivateNoteAddAuthorType } from "src/graphql/mutations/generated/question_private_note/question_private_note_add_author_type";
import { QuestionPrivateNoteCreateType } from "src/graphql/mutations/generated/question_private_note/question_private_note_create_type";
import { QuestionPrivateNoteDeleteType } from "src/graphql/mutations/generated/question_private_note/question_private_note_delete_type";
import { QuestionPrivateNoteEditType } from "src/graphql/mutations/generated/question_private_note/question_private_note_edit_type";
import { QuestionPrivateNoteRemoveAuthorType } from "src/graphql/mutations/generated/question_private_note/question_private_note_remove_author_type";
import { QuestionVoteAddVoterType } from "src/graphql/mutations/generated/question_vote/question_vote_add_voter_type";
import { QuestionVoteCreateType } from "src/graphql/mutations/generated/question_vote/question_vote_create_type";
import { QuestionVoteDeleteType } from "src/graphql/mutations/generated/question_vote/question_vote_delete_type";
import { QuestionVoteRemoveVoterType } from "src/graphql/mutations/generated/question_vote/question_vote_remove_voter_type";
import { UserCreateType } from "src/graphql/mutations/generated/user/user_create_type";
import { UserAuthJWTType } from "src/graphql/mutations/generated/user_auth_jwt_type";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    answerAddAuthor: AnswerAddAuthorType,
    answerCommentAddAuthor: AnswerCommentAddAuthorType,
    answerCommentCreate: AnswerCommentCreateType,
    answerCommentDelete: AnswerCommentDeleteType,
    answerCommentEdit: AnswerCommentEditType,
    answerCommentRemoveAuthor: AnswerCommentRemoveAuthorType,
    answerCreate: AnswerCreateType,
    answerDelete: AnswerDeleteType,
    answerEdit: AnswerEditType,
    answerRemoveAuthor: AnswerRemoveAuthorType,
    answerVoteAddVoter: AnswerVoteAddVoterType,
    answerVoteCreate: AnswerVoteCreateType,
    answerVoteDelete: AnswerVoteDeleteType,
    answerVoteRemoveVoter: AnswerVoteRemoveVoterType,
    questionAddAuthor: QuestionAddAuthorType,
    questionAnsweredEdit: QuestionAnsweredEditType,
    questionCommentAddAuthor: QuestionCommentAddAuthorType,
    questionCommentCreate: QuestionCommentCreateType,
    questionCommentDelete: QuestionCommentDeleteType,
    questionCommentEdit: QuestionCommentEditType,
    questionCommentRemoveAuthor: QuestionCommentRemoveAuthorType,
    questionCreate: QuestionCreateType,
    questionDelete: QuestionDeleteType,
    questionEdit: QuestionEditType,
    questionPrivateNoteAddAuthor: QuestionPrivateNoteAddAuthorType,
    questionPrivateNoteCreate: QuestionPrivateNoteCreateType,
    questionPrivateNoteDelete: QuestionPrivateNoteDeleteType,
    questionPrivateNoteEdit: QuestionPrivateNoteEditType,
    questionPrivateNoteRemoveAuthor: QuestionPrivateNoteRemoveAuthorType,
    questionRemoveAuthor: QuestionRemoveAuthorType,
    questionVoteAddVoter: QuestionVoteAddVoterType,
    questionVoteCreate: QuestionVoteCreateType,
    questionVoteDelete: QuestionVoteDeleteType,
    questionVoteRemoveVoter: QuestionVoteRemoveVoterType,
    userAuthJWT: UserAuthJWTType,
    userCreate: UserCreateType,
  }),
});
