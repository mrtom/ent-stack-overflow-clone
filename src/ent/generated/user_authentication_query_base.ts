// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@snowtop/ent";
import {
  EdgeType,
  User,
  UserAuthentication,
  UserAuthenticationToUsersEdge,
  UserToAnswersVotedQuery,
  UserToAuthDetailsQuery,
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
  UserToSavedAuthenticationDetailsQuery,
  UserToUserQuestionPrivateNotesQuery,
  UserToVoterToAnswersVotedQuery,
  UserToVoterToQuestionsVotedQuery,
} from "src/ent/internal";

export const userAuthenticationToUsersCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserAuthenticationToUsers);
export const userAuthenticationToUsersDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserAuthenticationToUsers,
    () => UserAuthenticationToUsersEdge,
  );

export class UserAuthenticationToUsersQueryBase extends AssocEdgeQueryBase<
  UserAuthentication,
  User,
  UserAuthenticationToUsersEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<UserAuthentication>) {
    super(
      viewer,
      src,
      userAuthenticationToUsersCountLoaderFactory,
      userAuthenticationToUsersDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends UserAuthenticationToUsersQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<UserAuthentication>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<UserAuthentication>,
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

  querySavedAuthenticationDetails(): UserToSavedAuthenticationDetailsQuery {
    return UserToSavedAuthenticationDetailsQuery.query(this.viewer, this);
  }

  queryUserQuestionPrivateNotes(): UserToUserQuestionPrivateNotesQuery {
    return UserToUserQuestionPrivateNotesQuery.query(this.viewer, this);
  }

  queryUserToAuthDetails(): UserToAuthDetailsQuery {
    return UserToAuthDetailsQuery.query(this.viewer, this);
  }

  queryVoterToAnswersVoted(): UserToVoterToAnswersVotedQuery {
    return UserToVoterToAnswersVotedQuery.query(this.viewer, this);
  }

  queryVoterToQuestionsVoted(): UserToVoterToQuestionsVotedQuery {
    return UserToVoterToQuestionsVotedQuery.query(this.viewer, this);
  }
}
