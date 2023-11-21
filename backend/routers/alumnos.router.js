import { Router } from "express";
import { getAlumnos } from "../controllers/alumnos.controller";

export const alumnosRouter = Router();

router.get("/alumnos", getAlumnos);
