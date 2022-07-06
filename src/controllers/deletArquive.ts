import fs from "fs";
import { Request, Response } from "express";

const deletArquive = (req: Request, res: Response) => {
  const id = req.params.id;

  fs.unlink(`./src/arquive/${id}.txt`, (err) => {
    if (err) throw err;
    console.log("deleted!");
  });

  return res.status(200).json({ msg: "arquive is deleted!" });
};
export default deletArquive;
