import React, { createContext, useEffect, useState } from "react";
import * as authService from "../services/AuthService";
import * as SecureStore from "expo-secure-store";

type User = {
  id: number;
  email: string;
  // add other fields from backend
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (payload: { email: string; password: string }) => Promise<any>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔄 Restore session
  useEffect(() => {
    const restoreSession = async () => {
      const token = await SecureStore.getItemAsync("access_token");
      const storedUser = await SecureStore.getItemAsync("user");

      if (!token || !storedUser) {
        setUser(null);
        return;
      }

      setUser(JSON.parse(storedUser));
    };

    restoreSession();
  }, []);

  const login = async (payload: { email: string; password: string }) => {
    const response = await authService.login(payload);
    setUser(response.user);
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
