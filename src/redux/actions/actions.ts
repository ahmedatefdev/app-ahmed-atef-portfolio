import {
  BLOG_ACTION_TYPES,
  EXPERTISE_ACTION_TYPES,
  PROJECT_ACTION_TYPES,
  THEME_ACTION_TYPES
} from "../types/ActionTypes";
import IAction from "../types/IAction";

export const setTheme = (): IAction => {
  return { type: THEME_ACTION_TYPES.SET_THEME_NAME };
};

export const fetchExpertisesAction = (): IAction => {
  return { type: EXPERTISE_ACTION_TYPES.FETCH_EXPERTISES };
};

export const fetchProjectsAction = (): IAction => {
  return { type: PROJECT_ACTION_TYPES.FETCH_PROJECTS };
};

export const fetchProjectWithIdAction = (projectId: string): IAction => {
  return { type: PROJECT_ACTION_TYPES.FETCH_PROJECT, payload: projectId };
};
export const fetchSummariesAction = (): IAction => {
  return { type: BLOG_ACTION_TYPES.FETCH_BLOG_SUMMARIES };
};
export const fetchArticlesAction = (): IAction => {
  return { type: BLOG_ACTION_TYPES.FETCH_BLOG_ARTICLES };
};
