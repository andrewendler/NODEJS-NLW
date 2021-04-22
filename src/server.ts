import express, { response } from "express";
import "./database";
import { Setting } from "./entities/settings";

import { routes } from "./routes";

const app = express();


app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log(" Server is running on port 3333"));