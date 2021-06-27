import { Interval } from "luxon";
import { GraphQLInt } from "graphql"
import * as bcrypt from "bcryptjs";
import { gqlField, gqlContextType } from "@lolopinto/ent/graphql";

import { UserBase } from "src/ent/internal";
import {
  query,
  AllowIfViewerRule,
  AlwaysDenyRule,
  Data,
  LoggedOutViewer,
  PrivacyPolicy,
  RequestContext,
  Viewer
} from "@lolopinto/ent"
import { loadEntsFromClause } from "@lolopinto/ent/core/ent";

import { Question } from "src/ent";
import { AllowIfOmniRule } from "src/privacy/omni";

export class User extends UserBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AlwaysDenyRule,
    ],
  };

  static async validateEmailPassword(
    email: string,
    password: string,
  ): Promise<Data | null> {
    const data = await User.loadRawDataFromEmailAddress(email);
    if (!data) {
      return null;
    }
    let valid = await bcrypt.compare(password, data.password || "");
    return valid ? data : null;
  }

  @gqlField({
    type: GraphQLInt
  })
  howLong() {
    return Interval.fromDateTimes(this.createdAt, new Date()).count('seconds');
  }

  @gqlField({ type: "[Question]", name: "questionsFeed" })
  async questionsFeed(
    @gqlContextType() context: RequestContext,
  ): Promise<Question[]> {
    const viewer: Viewer = new LoggedOutViewer(); // FIXME
    const unansweredQuestions = await loadEntsFromClause(
      viewer,
      query.Eq("answered", false),
      Question.loaderOptions(),
    );

    return Array.from(unansweredQuestions.values());
  }
}