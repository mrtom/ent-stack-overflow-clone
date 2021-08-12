import { Data, IDViewer, AllowIfViewerHasIdentityPrivacyPolicy } from "@snowtop/ent";

import {
  CreateQuestionVoteActionBase,
  QuestionVoteCreateInput,
} from "src/ent/question_vote/actions/generated/create_question_vote_action_base";

export { QuestionVoteCreateInput };

export default class CreateQuestionVoteAction extends CreateQuestionVoteActionBase {
  getPrivacyPolicy() {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  viewerForEntLoad(data: Data) {
    return new IDViewer(data.id);
  }
}
