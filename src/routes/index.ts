import { Router } from "express";
import * as actionVeicles from "../controllers/index";
import schema from "../schema/veiclesSchema";
import midleSchema from "../midleware/midleVeicleSchema";
const router = Router();

router.post(
  "/veicle/register",
  midleSchema(schema),
  actionVeicles.registerVeicle
);

router.delete("/veicle/:toDelete", actionVeicles.deleteVeicle);

router.delete("/veicle/arquive/:id", actionVeicles.deletArquive);

router.get("/veicle/see/:finder", actionVeicles.getOneVeicle);

router.get("/veicle/list", actionVeicles.listAllVeicles);

router.get("/veicle/createarquive/:id", actionVeicles.fileDataCreate);

router.patch("/veicle/update/:id", actionVeicles.updateVeicle);

export default router;
