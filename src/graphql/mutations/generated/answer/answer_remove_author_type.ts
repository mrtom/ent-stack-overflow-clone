// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import { mustDecodeIDFromGQLID } from "@lolopinto/ent/graphql";
import { Answer } from "src/ent/";
import AnswerRemoveAuthorAction from "src/ent/answer/actions/answer_remove_author_action";
import { AnswerType } from "src/graphql/resolvers/";

interface customAnswerRemoveAuthorInput {
  answerID: string;
  authorID: string;
}

interface AnswerRemoveAuthorPayload {
  answer: Answer;
}

export const AnswerRemoveAuthorInputType = new GraphQLInputObjectType({
  name: "AnswerRemoveAuthorInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    answerID: {
      type: GraphQLNonNull(GraphQLID),
    },
    authorID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const AnswerRemoveAuthorPayloadType = new GraphQLObjectType({
  name: "AnswerRemoveAuthorPayload",
  fields: (): GraphQLFieldConfigMap<
    AnswerRemoveAuthorPayload,
    RequestContext
  > => ({
    answer: {
      type: GraphQLNonNull(AnswerType),
    },
  }),
});

export const AnswerRemoveAuthorType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customAnswerRemoveAuthorInput }
> = {
  type: GraphQLNonNull(AnswerRemoveAuthorPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(AnswerRemoveAuthorInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<AnswerRemoveAuthorPayload> => {
    let answer = await AnswerRemoveAuthorAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.answerID),
      mustDecodeIDFromGQLID(input.authorID),
    );
    return { answer: answer };
  },
};
