declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    API_URL: string;
    MAIL_HOST_URL: string;
    RESUME_URL: string;
  }
}

interface Window {
  Stripe: any;
}
