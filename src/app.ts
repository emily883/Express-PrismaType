import express, { Application, json } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";

const app: Application = express();

app.use(cors());
app.use(json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/", routes);

export default app;
