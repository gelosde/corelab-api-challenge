import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const registerVeicle = async (req: Request, res: Response) => {
  const veicle = req.validated;

  let mensageReturn: Response<any, Record<string, any>>;

  const validatePlate = await new veicleRepoitory().getOneVeiclePlate(
    veicle.plate
  );

  if (validatePlate) {
    mensageReturn = res.status(409).json({ msg: "plate is already taken" });
  } else if (veicle["price_max"] <= veicle["price_min"] && !mensageReturn) {
    mensageReturn = res
      .status(400)
      .json({ msg: " maximun price have to be more than price min" });
  } else {
    const veicleRegistered = await new veicleRepoitory().saveVeicle(veicle);

    mensageReturn = res
      .status(201)
      .json({ msg: "veicle created", veicle: veicleRegistered });
  }

  return mensageReturn;
};

export default registerVeicle;
