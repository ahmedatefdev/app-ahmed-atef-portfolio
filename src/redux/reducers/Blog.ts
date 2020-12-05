import { BLOG_ACTION_TYPES } from "../types/ActionTypes";
import IAction from "../types/IAction";
import IBlogState from "../types/IBlogState";

const initialState: IBlogState = {
  blogSummaries: null,
  blogArticles: [],
  blogArticlesLoading: false,
  blogSummariesLoading: false
};

export default function BlogReducer(
  state: IBlogState = initialState,
  action: IAction
): IBlogState {
  switch (action.type) {
    case BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES:
      return {
        ...state,
        blogSummaries: action.payload
      };
    case BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES_LOADING:
      return {
        ...state,
        blogSummariesLoading: true
      };
    case BLOG_ACTION_TYPES.SET_BLOG_SUMMARIES_NOT_LOADING:
      return {
        ...state,
        blogSummariesLoading: false
      };
    case BLOG_ACTION_TYPES.SET_BLOG_ARTICLES:
      return {
        ...state,
        blogArticles: action.payload
      };
    case BLOG_ACTION_TYPES.SET_BLOG_ARTICLES_LOADING:
      return {
        ...state,
        blogArticlesLoading: true
      };
    case BLOG_ACTION_TYPES.SET_BLOG_ARTICLES_NOT_LOADING:
      return {
        ...state,
        blogArticlesLoading: false
      };
    default:
      return state;
  }
}
