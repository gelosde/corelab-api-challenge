import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const getOneVeicle = async (req: Request, res: Response) => {
  const veicleInfo = req.params.finder;

  const idFound = await new veicleRepoitory().getOneVeicle(veicleInfo);

  let code: Response<any, Record<string, any>>;
  if (idFound) {
    code = res.status(302).json({ idFound });
  } else
    code = res.status(404).json({ msg: "don't have any plate or id found" });

  return code;
};

export default getOneVeicle;
