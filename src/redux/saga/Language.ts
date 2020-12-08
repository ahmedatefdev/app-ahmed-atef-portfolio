import { put, select } from "redux-saga/effects";
import { i18n } from "../../../i18n";
import { LANGUAGE_ACTION_TYPES } from "../types/ActionTypes";
import ILanguageState, { LanguageNames } from "../types/ILanguageState";
import IState from "../types/IState";

const getLang = (state: IState) => state.language;
export const LANG_KEY = "LANG";
export function* ChangeLanguage({
  payload
}: {
  type: string;
  payload: LanguageNames;
}) {
  try {
    yield put({ type: LANGUAGE_ACTION_TYPES.SET_LANGUAGE, payload });

    localStorage.setItem(LANG_KEY, payload);

    yield put({
      type: LANGUAGE_ACTION_TYPES.SET_LANGUAGE_STORED
    });

    yield i18n.changeLanguage(payload);

    const i18nLang = i18n.language;
    console.log("🚀 ~ file: Language.ts ~ line 26 ~ i18nLang", i18nLang);

    let language: ILanguageState = yield select(getLang);
    console.log("🚀 ~ file: Language.ts ~ line 35 ~ language", language);
  } catch (err) {
    console.log("🚀 FetchExpertises: ~ err", err);
  }
}
