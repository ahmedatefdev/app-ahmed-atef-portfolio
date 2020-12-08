import { combineReducers } from "redux";
import IState from "../types/IState";
import BlogReducer from "./Blog";
import ExpertiseReducer from "./Expertise";
import LanguageReducer from "./Language";
import ProjectReducer from "./Project";
import ThemeReducer from "./Theme";

const rootReducer = combineReducers<IState>({
  theme: ThemeReducer,
  expertise: ExpertiseReducer,
  project: ProjectReducer,
  blog: BlogReducer,
  language: LanguageReducer
});

export default rootReducer;
