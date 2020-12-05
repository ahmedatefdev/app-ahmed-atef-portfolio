import { call, put } from "redux-saga/effects";
import axios from "../../helper/axios";
import ConvertObjectToModel from "../../helper/readObject";
import { BLOG_ACTION_TYPES } from "../types/ActionTypes";

export function* FetchSummaries() {
  try {
    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES_LOADING
    });

    const { data } = yield call(axios.get, "blog/summary");

    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES,
      payload: data
    });

    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES_NOT_LOADING
    });
  } catch (err) {
    console.log("🚀 FetchExpertises: ~ err", err);
  }
}

export function* FetchArticles({
  payload: projectId
}: {
  type: string;
  payload: string;
}) {
  try {
    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_ARTICLES_LOADING
    });

    const { data } = yield call(axios.get, `blog/articles`);

    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_ARTICLES,
      payload: data
    });

    yield put({
      type: BLOG_ACTION_TYPES.SET_BLOG_ARTICLES_NOT_LOADING
    });
  } catch (err) {
    console.log("🚀 ~ Project ~ err", err);
  }
}
