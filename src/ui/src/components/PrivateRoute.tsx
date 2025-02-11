import { PropsWithChildren } from "react";
import { useAuth } from "react-oidc-context";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

  const isLoggedIn = auth.isAuthenticated;

  return isLoggedIn && children;
};

export default PrivateRoute;
