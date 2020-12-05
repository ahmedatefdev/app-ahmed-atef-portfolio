import { THEME_ACTION_TYPES } from "../types/ActionTypes";
import IAction from "../types/IAction";
import IThemeState from "../types/IThemeState";

const initialState: IThemeState = {
  themeName: "dark"
};

export default function ThemeReducer(
  state: IThemeState = initialState,
  action: IAction
): IThemeState {
  switch (action.type) {
    case THEME_ACTION_TYPES.SET_THEME_NAME:
      return {
        ...state,
        themeName: state.themeName === "dark" ? "light" : "dark"
      };
    default:
      return state;
  }
}
