// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { QuestionToVotesEdge } from "src/ent/";
import { QuestionVoteType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, QuestionToVotesEdge>;

export const QuestionToVotesConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("QuestionToVotes", QuestionVoteType);
  }
  return connType;
};