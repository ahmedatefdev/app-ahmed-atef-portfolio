export interface IAppTheme {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  accent: string;
  darkerAccent: string;
  background: string;
  backgroundSecondary: string;
  border: string;
  grey: Object;
  textVers: string;
  white: string;
  highlight: string;
  secHighlight: string;
}

export interface IAppStyledProps {
  theme: IAppTheme;
}
