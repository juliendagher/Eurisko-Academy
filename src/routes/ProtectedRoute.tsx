import { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../stores/auth";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  if (!accessToken) return <Navigate to="/login"/>;
  return children;
};

export {ProtectedRoute}