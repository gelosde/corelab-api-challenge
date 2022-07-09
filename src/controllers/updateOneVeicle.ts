import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const updateVeicle = async (req: Request, res: Response) => {
  const id = req.params.id;

  const bodyModif = req.validated;

  let mensageReturn: any;

  const Verify = await new veicleRepoitory().getallVeicle();

  const idVerify = Verify.find((item) => item.id === id);

  if (!idVerify) {
    mensageReturn = res.status(404).json({ smg: "veicle not found" });
  }

  if (req.validated.plate) {
    const findPlate = await new veicleRepoitory().getOneVeiclePlate(
      req.validated.plate
    );

    if (findPlate && !mensageReturn) {
      mensageReturn = res
        .status(203)
        .json({ msg: "this plate alread is taken" });
    }
  }

  let modifiVeicle = idVerify;

  const veicleInfoModfi = Object.keys(bodyModif);
  if (!mensageReturn) {
    for (let cont = 0; cont < veicleInfoModfi.length; cont++) {
      modifiVeicle[veicleInfoModfi[cont]] = bodyModif[veicleInfoModfi[cont]];
    }
    if (bodyModif["price_max"] <= bodyModif["price_min"] && !mensageReturn) {
      mensageReturn = res
        .status(400)
        .json({ msg: " maximun price have to be more than price min" });
    } else if (!mensageReturn) {
      await new veicleRepoitory().updateVeicle(idVerify.id, modifiVeicle);
      mensageReturn = res
        .status(200)
        .json({ msg: "veicle is modificated", modifiVeicle });
    }
  }
  return mensageReturn;
};

export default updateVeicle;
