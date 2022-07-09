import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const updateVeicle = async (req: Request, res: Response) => {
  const id = req.params.id;

  const bodyModif = req.validated;

  let msg: any;

  const Verify = await new veicleRepoitory().getallVeicle();

  const idVerify = Verify.find((item) => item.id === id);

  if (!idVerify) {
    msg = res.status(404).json({ smg: "veicle not found" });
  }

  if (req.validated.plate) {
    const findPlate = await new veicleRepoitory().getOneVeiclePlate(
      req.validated.plate
    );

    if (findPlate && !msg) {
      msg = res.status(203).json({ msg: "this plate alread is taken" });
    }
  }

  let modifiVeicle = idVerify;

  const veicleInfoModfi = Object.keys(bodyModif);
  if (!msg) {
    for (let cont = 0; cont < veicleInfoModfi.length; cont++) {
      modifiVeicle[veicleInfoModfi[cont]] = bodyModif[veicleInfoModfi[cont]];
    }
    if (bodyModif["price_max"] <= bodyModif["price_min"] && !msg) {
      msg = res
        .status(400)
        .json({ msg: " maximun price have to be more than price min" });
    } else if (!msg) {
      await new veicleRepoitory().updateVeicle(idVerify.id, modifiVeicle);
      msg = res
        .status(200)
        .json({ msg: "veicle is modificated", modifiVeicle });
    }
  }
  return msg;
};

export default updateVeicle;
