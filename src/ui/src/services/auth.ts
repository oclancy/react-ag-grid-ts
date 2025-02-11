const keycloak = {
  authority: "http://localhost:8080/realms/react-ag-grid-ts",
  realm: "react-ag-grid-ts",
  client_id: "react-ag-grid-ts",
  redirect_uri: `${window.location.origin}${window.location.pathname}`,
};

export default keycloak;
