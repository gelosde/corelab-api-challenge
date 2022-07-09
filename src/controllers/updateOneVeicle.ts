import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const updateVeicle = async (req: Request, res: Response) => {
  const id = req.params.id;

  const bodyModif = req.body;

  const idVerify = await new veicleRepoitory().getOneVeicle(id);
  if (req.body.plate) {
    const findPlate = await new veicleRepoitory().getOneVeiclePlate(
      req.body.plate
    );
    if (findPlate) {
      return res.status(203).json({ msg: "this plate alread is taken" });
    }
  }
  if (!idVerify) {
    return res.status(404).json({ smg: "veicle not found" });
  }

  let modifiVeicle = idVerify;

  const veicleInfoModfi = Object.keys(bodyModif);

  for (let cont = 0; cont < veicleInfoModfi.length; cont++) {
    if (
      veicleInfoModfi[cont] !== "name" &&
      veicleInfoModfi[cont] !== "plate" &&
      veicleInfoModfi[cont] !== "description" &&
      veicleInfoModfi[cont] !== "isFavorite" &&
      veicleInfoModfi[cont] !== "year" &&
      veicleInfoModfi[cont] !== "color" &&
      veicleInfoModfi[cont] !== "price" &&
      veicleInfoModfi[cont] !== "createdAt"
    ) {
      return res
        .status(203)
        .json({ msg: `the element ${veicleInfoModfi[cont]} is not suported` });
    } else
      modifiVeicle[veicleInfoModfi[cont]] = bodyModif[veicleInfoModfi[cont]];
  }

  await new veicleRepoitory().updateVeicle(idVerify.id, modifiVeicle);
  return res.status(200).json({ msg: "veicle is modificated", modifiVeicle });
};

export default updateVeicle;
