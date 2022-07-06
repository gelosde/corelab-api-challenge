import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const registerVeicle = async (req: Request, res: Response) => {
  const veicle = req.validated;

  const validatePlate = await new veicleRepoitory().getOneVeiclePlate(
    veicle.plate
  );
  if (validatePlate) {
    return res.status(409).json({ msg: "plate is already taken" });
  }
  const veicleRegistered = await new veicleRepoitory().saveVeicle(veicle);

  return res
    .status(201)
    .json({ msg: "veicle created", veicle: veicleRegistered });
};

export default registerVeicle;
