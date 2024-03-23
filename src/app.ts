import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req: Request, res: Response) => {
  return res.send({
    status: "working",
  });
});

app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
  console.log(req.params);
  return res.send(req.params);
});

app.listen(5000, () => {
  console.log("Application running on port 5000");
});
