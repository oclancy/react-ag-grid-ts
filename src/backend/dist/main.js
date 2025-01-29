import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
// configures dotenv to work in your application
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const certPath = process.env.CERTPATH;
const certPass = process.env.CERTSPWD;
app.get("/", (request, response) => {
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
