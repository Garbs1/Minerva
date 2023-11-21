import { Router } from "express";
import { getGrupoById, getGrupos } from "../controllers/grupos.controller.js";

export const gruposRouter = Router();

gruposRouter.get("/getGrupos",getGrupos);

gruposRouter.get("/getGrupoById/:id", getGrupoById);