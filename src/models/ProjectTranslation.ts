import Language from "./Language";

type ProjectTranslation = {
  name: string;
  md_description: string;
  projectId: number;
  languageId: number;
  language: Language;
};

export default ProjectTranslation;
