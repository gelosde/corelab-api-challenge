import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const deleteVeicle = async (req: Request, res: Response) => {
  const toDelete = req.params.toDelete;

  const findVeicle = await new veicleRepoitory().getOneVeicle(toDelete);
  if (!findVeicle) {
    return res.status(404).json({ msg: "veicle not found" });
  }
  const viewVeicleDeleted = findVeicle;

  await new veicleRepoitory().deleteVeicle(toDelete);

  return res
    .status(200)
    .json({ msg: "this veicle is deleted", viewVeicleDeleted });
};

export default deleteVeicle;
