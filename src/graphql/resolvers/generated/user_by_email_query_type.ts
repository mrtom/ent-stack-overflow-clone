// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import { UserType } from "src/graphql/resolvers/internal";
import { UserResolver } from "../user";

export const UserByEmailQueryType: GraphQLFieldConfig<
  undefined,
  RequestContext
> = {
  type: UserType,
  args: {
    emailAddress: {
      description: "",
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _source,
    { emailAddress },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ) => {
    const r = new UserResolver();
    return r.userByEmail(context, emailAddress);
  },
};