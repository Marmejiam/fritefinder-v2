export const API_URL =
process.env.NODE_ENV === "test"
  ? "http://mocked-api-url"
  : import.meta.env.VITE_API_URL;

    // ce code permet de changer le URL de l'API en fonction de l'envir pour ne pas faire des appels en mode test

