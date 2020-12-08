export type LanguageNames = "en" | "ar";
export default interface ILanguageState {
  languageName: LanguageNames;
  languageStored: boolean;
}
