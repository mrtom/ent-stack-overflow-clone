import {
  Allow,
  AlwaysDenyRule,
  PrivacyPolicy,
  PrivacyResult,
  Skip,
  Viewer
} from "@snowtop/ent";

// TODO: This should be a mixin for 'voters' or 'votable ent' or somesuch
import { QuestionVote } from "src/ent/question_vote";

export const AllowIfVoterRule = {
  async apply(v: Viewer, voteableEnt?: QuestionVote): Promise<PrivacyResult> {
    if (v.viewerID && v.viewerID === voteableEnt?.voterID) {
      return Allow();
    }
    return Skip();
  },
};

export const AllowIfViewerVoterPrivacyPolicy: PrivacyPolicy = {
  rules: [AllowIfVoterRule, AlwaysDenyRule],
};