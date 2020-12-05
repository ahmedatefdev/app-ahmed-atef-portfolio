import IBlogState from "./IBlogState";
import IExpertiseState from "./IExpertiseState";
import IProjectState from "./IProjectState";
import IScoreState from "./IThemeState";

export default interface IState {
  theme: IScoreState;
  expertise: IExpertiseState;
  project: IProjectState;
  blog: IBlogState;
}
