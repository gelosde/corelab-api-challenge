import { Router } from "express";
import * as actionVeicles from "../controllers/index";
import schema from "../schema/veiclesSchema";
import midleSchema from "../midleware/midleVeicleSchema";
import veicleUpdateSchema from "../schema/veicleUpdateSchema";
const router = Router();

router.post(
  "/veicle/register",
  midleSchema(schema),
  actionVeicles.registerVeicle
);

router.delete("/veicle/:toDelete", actionVeicles.deleteVeicle);

router.get("/veicle/see/:finder", actionVeicles.getOneVeicle);

router.get("/veicle/list", actionVeicles.listAllVeicles);

router.patch(
  "/veicle/update/:id",
  midleSchema(veicleUpdateSchema),
  actionVeicles.updateVeicle
);

export default router;
