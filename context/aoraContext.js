import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appWrite";
const AoraContext = createContext(null);

export default AoraContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    getCurrentUser().then(
      (user) => {
        setUser(user);
        if (user) setIsLoggedIn(true);
        setIsLoading(false);
      },
      (error) => {
        throw error;
      }
    );
  }, []);
  return (
    <AoraContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
      }}
    />
  );
};
