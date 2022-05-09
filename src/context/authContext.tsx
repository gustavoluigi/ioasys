/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";
import useAuth from "./hooks/useAuth";

const AuthContext = createContext({});

interface AuthProps {
  children?: React.ReactNode;
}

function AuthProvider({ children }: AuthProps) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
