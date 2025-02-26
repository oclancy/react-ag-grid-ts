import https from "https";
import fs, { PathOrFileDescriptor } from "fs";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { auth } from "./auth";

// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT;
const certPath = process.env.CERTPATH as PathOrFileDescriptor;
const certPass = process.env.CERTSPWD;

app.use((req: Request, res, next) => {
  next();
});

app.get("/", auth as any, (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.get("/data", (request: Request, response: Response) => {
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
