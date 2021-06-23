// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@lolopinto/ent/graphql";
import { UserToAuthorToAuthoredAnswersEdge } from "src/ent/";
import { AnswerType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<
  GraphQLObjectType,
  UserToAuthorToAuthoredAnswersEdge
>;

export const UserToAuthorToAuthoredAnswersConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType(
      "UserToAuthorToAuthoredAnswers",
      AnswerType,
    );
  }
  return connType;
};
