import Language from "./Language";

type ExperienceTranslation = {
  name: string;
  description?: null | string;
  experienceId: number;
  languageId: number;
  language: Language;
};

export default ExperienceTranslation;
