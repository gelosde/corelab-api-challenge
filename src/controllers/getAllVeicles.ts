import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const listAllVeicles = async (__: Request, res: Response) => {
  const getAll = await new veicleRepoitory().getallVeicle();

  return res.status(200).json(getAll);
};

export default listAllVeicles;
