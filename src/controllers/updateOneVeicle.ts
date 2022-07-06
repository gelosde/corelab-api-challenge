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
      veicleInfoModfi[cont] !== "plate" &&
      veicleInfoModfi[cont] !== "chassis" &&
      veicleInfoModfi[cont] !== "renavam" &&
      veicleInfoModfi[cont] !== "model" &&
      veicleInfoModfi[cont] !== "brand" &&
      veicleInfoModfi[cont] !== "year"
    ) {
      return res
        .status(203)
        .json({ msg: `the element ${veicleInfoModfi[cont]} is not suported` });
    } else
      modifiVeicle[veicleInfoModfi[cont]] = bodyModif[veicleInfoModfi[cont]];
  }

  const isModificate = await new veicleRepoitory().updateVeicle(
    idVerify.id,
    modifiVeicle.plate,
    modifiVeicle.chassis,
    modifiVeicle.renavam,
    modifiVeicle.model,
    modifiVeicle.brand,
    modifiVeicle.year
  );
  console.log(isModificate);
  return res.status(200).json({ msg: "veicle is modificated", modifiVeicle });
};

export default updateVeicle;
