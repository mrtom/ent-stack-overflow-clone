import {
  Allow,
  Context,
  Ent,
  ID,
  Skip,
  PrivacyResult,
  Viewer
} from "@snowtop/ent";

interface UserReputationAdminViewerOptions extends Viewer {
  viewerID: ID;
  context?: Context;
  ent?: Ent | null;
}

interface IUserReputationAdminViewer extends Viewer {
  isUserReputationAdmin(): boolean;
}

export class UserReputationAdminViewer implements Viewer, IUserReputationAdminViewer {
  public viewerID: ID;
  private ent: Ent | null = null;
  public context?: Context;

  constructor(viewerID: ID, opts?: Partial<UserReputationAdminViewerOptions>);
  constructor(opts: UserReputationAdminViewerOptions);
  constructor(args: UserReputationAdminViewerOptions | ID, opts?: UserReputationAdminViewerOptions) {
    if (typeof args === "object") {
      this.viewerID = args.viewerID;
      opts = args;
    } else {
      this.viewerID = args;
    }
    this.ent = opts?.ent || null;
    this.context = opts?.context;
  }

  async viewer() {
    return this.ent;
  }

  instanceKey(): string {
    return `userReputationAdminViewer_from_action_by: ${this.viewerID}`;
  }

  isUserReputationAdmin(): boolean {
    return true;
  }
}

export const AllowIfUserReputationAdminRule = {
  async apply(v: Viewer, ent: Ent): Promise<PrivacyResult> {
    if (
      (v as IUserReputationAdminViewer).isUserReputationAdmin !== undefined &&
      (v as IUserReputationAdminViewer).isUserReputationAdmin()
    ) {
      return Allow();
    }
    return Skip();
  },
};