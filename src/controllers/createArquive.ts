import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";
import fs from "fs";

const fileDataCreate = async (req: Request, res: Response) => {
  const id = req.params.id;

  const findId = await new veicleRepoitory().getOneVeicle(id);
  if (!findId) {
    return res.status(404).json({ msg: "Veicle not found" });
  }

  fs.writeFile(
    `./src/arquive/${String(id)}.txt`,
    JSON.stringify(findId),
    { flag: "w" },
    function (err) {
      if (err) throw err;
      console.log("arquivo criado");
    }
  );

  return res.status(200).json({ msg: "download finished" });
};

export default fileDataCreate;
