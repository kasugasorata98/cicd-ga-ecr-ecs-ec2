import express, { Request, Response } from "express";
import cors from "cors";
import { test } from "./src";

const app = express();

async function main() {
  test();
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get("/", (_: Request, res: Response) => {
    res.json("Health Check: Ok");
  });

  app.get("/stop", (req, res) => {
    res.send("Server is shutting down...");
    process.exit(0);
  });

  app.listen(3000, () => {
    console.log("App listening at port: " + 3000);
  });
}

process.on("SIGTERM", () => {
  console.log("Received SIGTERM signal, shutting down...");
  // Perform any necessary cleanup tasks here
  process.exit(0);
});

main();
