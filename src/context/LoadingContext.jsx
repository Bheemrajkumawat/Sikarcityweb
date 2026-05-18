import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Reset loading state when location changes (fallback safety)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  const triggerLoading = () => {
    setIsLoading(true);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, triggerLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => useContext(LoadingContext);
