import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//import { auth } from "./auth";
import { expressjwt } from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(cors());
const auth = expressjwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `http://localhost:8080/realms/react-ag-grid-ts/.well-known/jwks.json`,
    }),
    // Validate the audience and the issuer.
    audience: "urn:react-api-aud",
    issuer: "http://localhost:8080/",
    algorithms: ["RS256"],
});
const PORT = process.env.PORT;
const certPath = process.env.CERTPATH;
const certPass = process.env.CERTSPWD;
app.use((req, res, next) => { });
app.get("/", auth, (request, response) => {
    response.status(200).send("Hello World");
});
app.get("/data", (request, response) => {
    response.status(200).send("Hello World");
});
const options = {
    pfx: fs.readFileSync(certPath),
    passphrase: certPass,
};
https
    .createServer(options, app)
    .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
})
    .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
