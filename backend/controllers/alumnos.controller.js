import { supabase } from "../db/connection.js";

export const getAlumnos = async (req, res) => {
  let { data: alumnos, error } = await supabase.from("alumnos").select("*");
  res.json(alumnos);
};

export const getAlumnoById = async (req, res) => {};
