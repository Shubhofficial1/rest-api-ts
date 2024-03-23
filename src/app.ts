import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.user = name;
    next();
  };

app.use(middleware({ name: "Shubham" }));

app.get("/health", (req: Request, res: Response) => {
  return res.send({
    status: "working",
  });
});

app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
  console.log(req.params);
  console.log(res.locals.user);
  return res.send(req.params);
});

app.listen(5000, () => {
  console.log("Application running on port 5000");
});
