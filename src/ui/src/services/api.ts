import { User } from "oidc-client-ts";
import keycloak from "./auth";
function getUser() {
  const oidcStorage = sessionStorage.getItem(
    //`oidc.user:${keycloak.authority}:${keycloak.client_id}`
    `oidc.user:http://localhost:8080/realms/react-ag-grid-ts:react-ag-grid-ts`
  );
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}

export const getData = async (): Promise<any> => {
  try {
    const user = getUser();
    const token = user?.access_token;

    const response = await fetch("https://localhost:3001/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return JSON.parse(await response.json());
  } catch (e) {
    console.error(e);
  }
};
