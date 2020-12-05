import Experience from "./Experience";
import Language from "./Language";
import Project from "./Project";
import StackTranslation from "./StackTranslation";

type Stack = {
  id: number;
  defaultName: string;
  stackTranslations: StackTranslation[];
  experiences: Experience[];
  projects: Project[];
};

export default Stack;
