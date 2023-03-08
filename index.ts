import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

async function main() {
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

  app.listen(3000, () => {
    console.log("App listening at port: " + 3000);
  });
}

main();
