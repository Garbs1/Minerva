import express from "express";
import { alumnosRouter } from "./routers/alumnos.router";

const app = express();

app.use(alumnosRouter);

app.listen(5000, () => {
  console.log("oli");
});
