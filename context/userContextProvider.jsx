import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appWrite";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoadingUserInfo(true);
      const user = await getCurrentUser();
      setIsLoadingUserInfo(false);
      return user;
    })().then(
      (user) => setUser(user),
      (reason) => {
        console.error(
          `something went wrong while fetching the user: ${reason}`
        );
        throw error;
      }
    );
  }, []);
  return (
    <UserContext.Provider
      value={{ user, setUser, isLoadingUserInfo, setIsLoadingUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
