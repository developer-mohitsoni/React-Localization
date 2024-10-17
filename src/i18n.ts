import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        viteReact: "Click on the Vite and React logos to learn more",
      },
    },
    pt: {
      translation: {
        viteReact: "Clique nos logotipos Vite e React para saber mais",
      },
    },
    es: {
      translation: {
        viteReact:
          "Haga clic en los logotipos de Vite y React para obtener más información.",
      },
    },
  },
});

export default i18n;
