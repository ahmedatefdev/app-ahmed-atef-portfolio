import { LANGUAGE_ACTION_TYPES } from "../types/ActionTypes";
import IAction from "../types/IAction";
import ILanguageState from "../types/ILanguageState";

const initialState: ILanguageState = {
  languageName: "en",
  languageStored: false
};

export default function LanguageReducer(
  state: ILanguageState = initialState,
  action: IAction
): ILanguageState {
  switch (action.type) {
    case LANGUAGE_ACTION_TYPES.SET_LANGUAGE:
      return {
        ...state,
        languageName: action.payload
      };
    case LANGUAGE_ACTION_TYPES.SET_LANGUAGE_STORED:
      return {
        ...state,
        languageStored: true
      };
    default:
      return state;
  }
}
