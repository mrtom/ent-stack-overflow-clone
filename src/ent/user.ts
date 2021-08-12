import { Interval } from "luxon";
import { GraphQLInt } from "graphql"
import * as bcrypt from "bcryptjs";
import { gqlField, gqlConnection, gqlContextType } from "@snowtop/ent/graphql";

import { UserBase } from "src/ent/internal";
import {
  AllowIfHasIdentity,
  AllowIfViewerRule,
  AlwaysDenyRule,
  Data,
  PrivacyPolicy,
} from "@snowtop/ent"

import { AllowIfOmniRule } from "src/privacy/omni";
import { ViewerToUnansweredQuestionsQuery } from "src/ent/user/query/user_to_unanswered_questions_query";

export class User extends UserBase {
  privacyPolicy: PrivacyPolicy = {
    rules: [
      AllowIfOmniRule,
      AllowIfViewerRule,
      AllowIfHasIdentity,
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

  @gqlField({ name: "questionsFeed", type: gqlConnection("Question") })
  questionsFeed() {
    const questions = new ViewerToUnansweredQuestionsQuery(this.viewer, this);
    return questions;
  }
}
