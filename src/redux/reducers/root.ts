import { combineReducers } from "redux";
import Project from "../../components/Projects/Project";
import IState from "../types/IState";
import BlogReducer from "./Blog";
import ExpertiseReducer from "./Expertise";
import ProjectReducer from "./Project";
import ThemeReducer from "./Theme";

const rootReducer = combineReducers<IState>({
  theme: ThemeReducer,
  expertise: ExpertiseReducer,
  project: ProjectReducer,
  blog: BlogReducer
});

export default rootReducer;
