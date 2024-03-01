import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { routes } from "./routes";

createConnection().then(() => {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:8080",
        "http://localhost:4200",
      ],
      credentials: true,
    })
  );

  routes(app);

  const server = app.listen(8000, () => {
    const { port } = server.address() as { port: number };
    console.log(`Listening to port ${port}`);
    console.log(`Server running at http://localhost:${port}`);
  });
});
