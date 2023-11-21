import { Router } from "express";
import {
  getAlumnoById,
  getAlumnos,
} from "../controllers/alumnos.controller.js";

export const alumnosRouter = Router();

alumnosRouter.get("/getAlumnos", getAlumnos);

alumnosRouter.get("/getAlumnoById/:id", getAlumnoById);
