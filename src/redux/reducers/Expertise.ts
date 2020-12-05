import { EXPERTISE_ACTION_TYPES } from "../types/ActionTypes";
import IAction from "../types/IAction";
import IExpertiseState from "../types/IExpertiseState";

const initialState: IExpertiseState = {
  stacksWithExpertises: [],
  stacksWithExpertisesLoading: false
};

export default function ExpertiseReducer(
  state: IExpertiseState = initialState,
  action: IAction
): IExpertiseState {
  switch (action.type) {
    case EXPERTISE_ACTION_TYPES.SET_STACKS_WITH_EXPERTISES:
      return {
        ...state,
        stacksWithExpertises: action.payload
      };
    case EXPERTISE_ACTION_TYPES.SET_EXPERTISES_LOADING:
      return {
        ...state,
        stacksWithExpertisesLoading: true
      };
    case EXPERTISE_ACTION_TYPES.SET_EXPERTISES_NOT_LOADING:
      return {
        ...state,
        stacksWithExpertisesLoading: false
      };
    default:
      return state;
  }
}
