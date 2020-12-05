import Project from "../../models/Project";
import Stack from "../../models/Stack";

export default interface IProjectState {
  stacksWithProjects: Stack[];
  stacksWithProjectsLoading: boolean;
  project: Project | null;
  projectLoading: boolean;
}
