/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_FORM_ID: string;
  readonly VITE_BEEHIIV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
