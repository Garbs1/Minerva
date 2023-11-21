import express from "express";
import { alumnosRouter } from "./routers/alumnos.router.js";
import { gruposRouter } from "./routers/grupos.router.js";

const app = express();

app.use(alumnosRouter);
app.use(gruposRouter);

app.listen(5000, () => {
  console.log("oli");
});
