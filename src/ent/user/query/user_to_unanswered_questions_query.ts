import { CustomEdgeQueryBase, Ent, QueryLoaderFactory, RawCountLoaderFactory } from "@snowtop/ent";

import { questionLoader } from "src/ent/internal";
import {
  query,
  Viewer
} from "@snowtop/ent"

import { Question } from "src/ent";

import type { ID } from "@snowtop/ent";

// Load recent questions for this user
export class ViewerToUnansweredQuestionsQuery extends CustomEdgeQueryBase<Question> {
  constructor(viewer: Viewer, src: ID | Ent) {
    const notAnsweredQuery = query.Eq("answered", false);
    const notViewerQuery = query.NotEq("user_id", viewer.viewerID);
    const unansweredQuestionsFilterQuery = query.And(notAnsweredQuery, notViewerQuery);

    const unansweredQuestionsLoader = new QueryLoaderFactory({
      ...Question.loaderOptions(),
      groupCol: undefined,
      clause: unansweredQuestionsFilterQuery,
      toPrime: [questionLoader],
    });

    const unansweredQuestionsCountLoader = new RawCountLoaderFactory({
      ...Question.loaderOptions(),
      groupCol: undefined,
      clause: unansweredQuestionsFilterQuery,
    });

    super(viewer, {
      src,
      countLoaderFactory: unansweredQuestionsCountLoader,
      dataLoaderFactory: unansweredQuestionsLoader,
      options: Question.loaderOptions(),
    });
  }
}