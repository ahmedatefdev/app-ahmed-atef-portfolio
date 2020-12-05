import { PROJECT_ACTION_TYPES } from "../types/ActionTypes";
import IAction from "../types/IAction";
import IProjectState from "../types/IProjectState";

const initialState: IProjectState = {
  stacksWithProjects: [],
  stacksWithProjectsLoading: false,
  project: null,
  projectLoading: false
};

export default function ProjectReducer(
  state: IProjectState = initialState,
  action: IAction
): IProjectState {
  switch (action.type) {
    case PROJECT_ACTION_TYPES.SET_PROJECTS_WITH_EXPERTISES:
      return {
        ...state,
        stacksWithProjects: action.payload
      };
    case PROJECT_ACTION_TYPES.SET_PROJECTS_LOADING:
      return {
        ...state,
        stacksWithProjectsLoading: true
      };
    case PROJECT_ACTION_TYPES.SET_PROJECTS_NOT_LOADING:
      return {
        ...state,
        stacksWithProjectsLoading: false
      };
    case PROJECT_ACTION_TYPES.SET_PROJECT_WITH_EXPERTISES:
      return {
        ...state,
        project: action.payload
      };
    case PROJECT_ACTION_TYPES.SET_PROJECT_LOADING:
      return {
        ...state,
        projectLoading: true
      };
    case PROJECT_ACTION_TYPES.SET_PROJECT_NOT_LOADING:
      return {
        ...state,
        projectLoading: false
      };
    default:
      return state;
  }
}
