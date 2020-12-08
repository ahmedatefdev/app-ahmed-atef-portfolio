import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import {
  BLOG_ACTION_TYPES,
  EXPERTISE_ACTION_TYPES,
  LANGUAGE_ACTION_TYPES,
  PROJECT_ACTION_TYPES
} from "../types/ActionTypes";
import { FetchArticles, FetchSummaries } from "./Blog";
import { FetchExpertises } from "./Expertises";
import { ChangeLanguage } from "./Language";
import { FetchProject, FetchProjects } from "./Project";

function* rootSaga() {
  yield all([
    takeLeading(EXPERTISE_ACTION_TYPES.FETCH_EXPERTISES, FetchExpertises),
    takeLeading(PROJECT_ACTION_TYPES.FETCH_PROJECTS, FetchProjects),
    takeEvery(PROJECT_ACTION_TYPES.FETCH_PROJECT, FetchProject),
    takeLeading(BLOG_ACTION_TYPES.FETCH_BLOG_SUMMARIES, FetchSummaries),
    takeLeading(BLOG_ACTION_TYPES.FETCH_BLOG_ARTICLES, FetchArticles),
    takeLeading(LANGUAGE_ACTION_TYPES.CHANGE_LANGUAGE, ChangeLanguage)
  ]);
}

export default rootSaga;
