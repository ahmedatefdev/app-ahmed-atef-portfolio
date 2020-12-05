import { call, put } from "redux-saga/effects";
import axios from "../../helper/axios";
import ConvertObjectToModel from "../../helper/readObject";
import { PROJECT_ACTION_TYPES } from "../types/ActionTypes";

export function* FetchProjects() {
  try {
    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECTS_LOADING
    });

    const { data } = yield call(axios.get, "/project");

    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECTS_WITH_EXPERTISES,
      payload: data
    });

    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECTS_NOT_LOADING
    });
  } catch (err) {
    console.log("🚀 FetchExpertises: ~ err", err);
  }
}

export function* FetchProject({
  payload: projectId
}: {
  type: string;
  payload: string;
}) {
  try {
    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECT_LOADING
    });

    const { data } = yield call(axios.get, `/project/${projectId}`);

    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECT_WITH_EXPERTISES,
      payload: data
    });

    yield put({
      type: PROJECT_ACTION_TYPES.SET_PROJECT_NOT_LOADING
    });
  } catch (err) {
    console.log("🚀 ~ Project ~ err", err);
  }
}
