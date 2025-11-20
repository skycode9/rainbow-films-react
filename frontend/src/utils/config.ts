// Get the correct API URL based on environment
export const getApiUrl = () => {
  if (import.meta.env.PROD) {
    return "https://rainbow-films-react.onrender.com/api";
  }
  return import.meta.env.VITE_API_URL;
};
