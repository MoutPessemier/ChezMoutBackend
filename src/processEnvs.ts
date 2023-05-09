declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string | undefined;
    PORT: string;
    DATABASE_NAME: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
  }
}
