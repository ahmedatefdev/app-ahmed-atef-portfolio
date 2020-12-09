declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    API_URL: string;
    MAIL_HOST_URL: string;
    RESUME_URL_ENGLISH: string;
    RESUME_URL_ARABIC:string
  }
}

interface Window {
  Stripe: any;
}
