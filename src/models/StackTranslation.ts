import Language from "./Language";

type StackTranslation = {
  name: string;
  description: string;
  stackId: number;
  languageId: number;
  language: Language;
};

export default StackTranslation;
