import { expressJwtSecret, GetVerificationKey } from "jwks-rsa";
import { expressjwt as jwt } from "express-jwt";

export const auth = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://${process.env.AUTH_ENDPOINT}/realms/react-ag-grid-ts/.well-known/jwks.json`,
  }) as GetVerificationKey,

  // Validate the audience and the issuer.
  audience: "urn:react-api-aud",
  issuer: "http://localhost:8080/",
  algorithms: ["RS256"],
});
