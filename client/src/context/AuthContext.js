import { createContext, useEffect, useState } from "react";
import { makeRequest, methodTypes } from "../helpers/api";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);

      try {
        const response = await makeRequest({
          method: methodTypes.GET,
          url: "/auth/login",
          withCredentials: true,
        });

        setUser({ ...response });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setUser({ loggedIn: false });
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default UserContext;
