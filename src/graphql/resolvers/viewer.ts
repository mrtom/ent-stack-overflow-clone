import {
  gqlContextType,
  gqlField,
  gqlObjectType,
  gqlQuery,
  encodeGQLID
} from "@snowtop/ent/graphql"
import { RequestContext, Viewer } from "@snowtop/ent"
import { GraphQLID } from "graphql"

import { User } from "src/ent/";

@gqlObjectType({ name: "Viewer" })
export class ViewerType {
  constructor(private viewer: Viewer) { }

  @gqlField({ type: GraphQLID, nullable: true })
  async viewerID() {
    const user = await this.user();
    if (!user) {
      return null;
    }
    return encodeGQLID(user);
  }

  @gqlField({ type: User, nullable: true })
  async user(): Promise<User | null> {
    const v = this.viewer.viewerID;
    if (!v) {
      return null;
    }
    return User.loadX(this.viewer, v);
  }
}

export default class ViewerResolver {
  @gqlQuery({ name: "viewer", type: ViewerType })
  viewer(@gqlContextType() context: RequestContext): ViewerType {
    return new ViewerType(context.getViewer());
  }
}