import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import keycloak from "./keycloak";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  initError: string | null;
  login: (redirectUri?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    keycloak
      .init({
        // Check for an existing session without forcing a redirect.
        // When Keycloak redirects back with ?code=..., keycloak-js automatically
        // exchanges it for tokens using PKCE (S256 code challenge by default in v21+).
        onLoad: "check-sso",
        pkceMethod: "S256",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
      })
      .then((authenticated) => {
        setIsAuthenticated(authenticated);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Keycloak init error:", err);
        setInitError(
          "Authentication service is unavailable. Please try again later.",
        );
        setIsLoading(false);
      });
  }, []);

  const login = (redirectUri?: string) => {
    keycloak.login({
      redirectUri: redirectUri ?? window.location.origin + "/employees",
    });
  };

  const logout = () => {
    keycloak.logout({ redirectUri: window.location.origin + "/employees" });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, initError, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
