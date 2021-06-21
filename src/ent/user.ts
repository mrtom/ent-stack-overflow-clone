import { Interval } from "luxon";
import { GraphQLInt } from "graphql"
import * as bcrypt from "bcryptjs";
import { gqlField } from "@lolopinto/ent/graphql";

import { UserBase } from "src/ent/internal";
import {
  PrivacyPolicy,
  AllowIfViewerRule,
  AlwaysDenyRule,
  Data
} from "@lolopinto/ent"

import { AllowIfOmniRule } from "./../privacy/omni";

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
}