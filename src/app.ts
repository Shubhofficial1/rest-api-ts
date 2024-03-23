import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.send("You made a req to all http methods");
});

app.listen(5000, () => {
  console.log("Application running on port 5000");
});
