import { call, put } from "redux-saga/effects";
import axios from "../../helper/axios";
import ConvertObjectToModel from "../../helper/readObject";
import Stack from "../../models/Stack";
import { EXPERTISE_ACTION_TYPES } from "../types/ActionTypes";

// const dataRes: Stack[] = yield call(ConvertObjectToModel, data);
export function* FetchExpertises() {
  try {
    yield put({
      type: EXPERTISE_ACTION_TYPES.SET_EXPERTISES_LOADING
    });
    const { data } = yield call(axios.get, "/experience");

    yield put({
      type: EXPERTISE_ACTION_TYPES.SET_STACKS_WITH_EXPERTISES,
      payload: data
    });

    yield put({
      type: EXPERTISE_ACTION_TYPES.SET_EXPERTISES_NOT_LOADING
    });
  } catch (err) {
    console.log("🚀 FetchExpertises: ~ err", err);
  }
}
