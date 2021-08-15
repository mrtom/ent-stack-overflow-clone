import {
  PrivacyPolicy,
  AllowIfViewerHasIdentityPrivacyPolicy,
} from "@snowtop/ent";

import { QuestionComment } from "src/ent";
import { EntCreationObserver } from 'src/observers/EntCreationObserver';
import { fakeSMSService } from "src/services/fakeSMSService";

import {
  CreateQuestionCommentActionBase,
  QuestionCommentCreateInput,
} from "src/ent/question_comment/actions/generated/create_question_comment_action_base";


import { QuestionCommentBuilder } from './question_comment_builder';

export { QuestionCommentCreateInput };

export default class CreateQuestionCommentAction extends CreateQuestionCommentActionBase {
  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  observers = [
    {
      observe: async (_builder: QuestionCommentBuilder, input: QuestionCommentCreateInput) => {
        const question = await _builder.editedEnt();
        if (question !== null) {
          const questionAuthor = await question.loadAuthor();
          if (questionAuthor) {
            fakeSMSService.sendSMS(questionAuthor.id, "Your question received a comment");
          }
        }
      },
    },
    new EntCreationObserver<QuestionComment>(),
  ];
}
