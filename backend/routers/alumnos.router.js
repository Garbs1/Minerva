import { Router } from "express";
import { getAlumnoById, getAlumnos } from "../controllers/alumnos.controller";

export const alumnosRouter = Router();

alumnosRouter.get("/getAlumnos", getAlumnos);

alumnosRouter.get("/getAlumnoById", getAlumnoById)