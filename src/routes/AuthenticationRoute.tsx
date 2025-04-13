import { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../stores/auth";

const AuthenticationRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  if (accessToken) return <Navigate to="/"/>;
  return children;
};

export {AuthenticationRoute}