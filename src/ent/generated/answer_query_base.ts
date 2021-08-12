// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@snowtop/ent";
import {
  Answer,
  AnswerComment,
  AnswerCommentToAuthorsQuery,
  AnswerToAuthorsEdge,
  AnswerToCommentsEdge,
  AnswerToVotesEdge,
  AnswerVote,
  AnswerVoteToVotersQuery,
  EdgeType,
  User,
  UserToAnswersVotedQuery,
  UserToAuthorToAuthoredAnswerCommentsQuery,
  UserToAuthorToAuthoredAnswersQuery,
  UserToAuthorToAuthoredQuestionCommentsQuery,
  UserToAuthorToAuthoredQuestionsQuery,
  UserToAuthoredAnswerCommentsQuery,
  UserToAuthoredAnswersQuery,
  UserToAuthoredQuestionCommentsQuery,
  UserToAuthoredQuestionsQuery,
  UserToQuestionPrivateNotesQuery,
  UserToQuestionsVotedQuery,
  UserToUserQuestionPrivateNotesQuery,
  UserToVoterToAnswersVotedQuery,
  UserToVoterToQuestionsVotedQuery,
} from "src/ent/internal";

export const answerToAuthorsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.AnswerToAuthors);
export const answerToAuthorsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.AnswerToAuthors,
  () => AnswerToAuthorsEdge,
);

export const answerToCommentsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.AnswerToComments);
export const answerToCommentsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.AnswerToComments,
  () => AnswerToCommentsEdge,
);

export const answerToVotesCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.AnswerToVotes,
);
export const answerToVotesDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.AnswerToVotes,
  () => AnswerToVotesEdge,
);

export class AnswerToAuthorsQueryBase extends AssocEdgeQueryBase<
  Answer,
  User,
  AnswerToAuthorsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Answer>) {
    super(
      viewer,
      src,
      answerToAuthorsCountLoaderFactory,
      answerToAuthorsDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends AnswerToAuthorsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Answer>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Answer>,
  ): T {
    return new this(viewer, src);
  }

  queryAnswersVoted(): UserToAnswersVotedQuery {
    return UserToAnswersVotedQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredAnswerComments(): UserToAuthorToAuthoredAnswerCommentsQuery {
    return UserToAuthorToAuthoredAnswerCommentsQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredAnswers(): UserToAuthorToAuthoredAnswersQuery {
    return UserToAuthorToAuthoredAnswersQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredQuestionComments(): UserToAuthorToAuthoredQuestionCommentsQuery {
    return UserToAuthorToAuthoredQuestionCommentsQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredQuestions(): UserToAuthorToAuthoredQuestionsQuery {
    return UserToAuthorToAuthoredQuestionsQuery.query(this.viewer, this);
  }

  queryAuthoredAnswerComments(): UserToAuthoredAnswerCommentsQuery {
    return UserToAuthoredAnswerCommentsQuery.query(this.viewer, this);
  }

  queryAuthoredAnswers(): UserToAuthoredAnswersQuery {
    return UserToAuthoredAnswersQuery.query(this.viewer, this);
  }

  queryAuthoredQuestionComments(): UserToAuthoredQuestionCommentsQuery {
    return UserToAuthoredQuestionCommentsQuery.query(this.viewer, this);
  }

  queryAuthoredQuestions(): UserToAuthoredQuestionsQuery {
    return UserToAuthoredQuestionsQuery.query(this.viewer, this);
  }

  queryQuestionPrivateNotes(): UserToQuestionPrivateNotesQuery {
    return UserToQuestionPrivateNotesQuery.query(this.viewer, this);
  }

  queryQuestionsVoted(): UserToQuestionsVotedQuery {
    return UserToQuestionsVotedQuery.query(this.viewer, this);
  }

  queryUserQuestionPrivateNotes(): UserToUserQuestionPrivateNotesQuery {
    return UserToUserQuestionPrivateNotesQuery.query(this.viewer, this);
  }

  queryVoterToAnswersVoted(): UserToVoterToAnswersVotedQuery {
    return UserToVoterToAnswersVotedQuery.query(this.viewer, this);
  }

  queryVoterToQuestionsVoted(): UserToVoterToQuestionsVotedQuery {
    return UserToVoterToQuestionsVotedQuery.query(this.viewer, this);
  }
}

export class AnswerToCommentsQueryBase extends AssocEdgeQueryBase<
  Answer,
  AnswerComment,
  AnswerToCommentsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Answer>) {
    super(
      viewer,
      src,
      answerToCommentsCountLoaderFactory,
      answerToCommentsDataLoaderFactory,
      AnswerComment.loaderOptions(),
    );
  }

  static query<T extends AnswerToCommentsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Answer>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Answer>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): AnswerCommentToAuthorsQuery {
    return AnswerCommentToAuthorsQuery.query(this.viewer, this);
  }
}

export class AnswerToVotesQueryBase extends AssocEdgeQueryBase<
  Answer,
  AnswerVote,
  AnswerToVotesEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Answer>) {
    super(
      viewer,
      src,
      answerToVotesCountLoaderFactory,
      answerToVotesDataLoaderFactory,
      AnswerVote.loaderOptions(),
    );
  }

  static query<T extends AnswerToVotesQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Answer>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Answer>,
  ): T {
    return new this(viewer, src);
  }

  queryVoters(): AnswerVoteToVotersQuery {
    return AnswerVoteToVotersQuery.query(this.viewer, this);
  }
}
