// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLBoolean,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import {
  GraphQLEdgeConnection,
  GraphQLNodeInterface,
  nodeIDEncoder,
} from "@lolopinto/ent/graphql";
import { Answer, AnswerToAuthorsQuery } from "src/ent/";
import {
  AnswerToAuthorsConnectionType,
  QuestionType,
  UserType,
} from "src/graphql/resolvers/internal";

export const AnswerType = new GraphQLObjectType({
  name: "Answer",
  fields: (): GraphQLFieldConfigMap<Answer, RequestContext> => ({
    author: {
      type: UserType,
      resolve: (answer: Answer, args: {}, context: RequestContext) => {
        return answer.loadAuthor();
      },
    },
    question: {
      type: QuestionType,
      resolve: (answer: Answer, args: {}, context: RequestContext) => {
        return answer.loadQuestion();
      },
    },
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: nodeIDEncoder,
    },
    body: {
      type: GraphQLNonNull(GraphQLString),
    },
    acceptedAnswer: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    authors: {
      type: GraphQLNonNull(AnswerToAuthorsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (answer: Answer, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          answer.viewer,
          answer,
          (v, answer: Answer) => AnswerToAuthorsQuery.query(v, answer),
          args,
        );
      },
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof Answer;
  },
});
