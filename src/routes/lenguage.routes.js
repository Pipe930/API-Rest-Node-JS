import { Router } from "express";
import { methods as languageControllers } from "../controllers/lenguage.controller";

const router = Router();

router.get("/", languageControllers.getLenguages);
router.get("/:id", languageControllers.getLenguage);
router.post("/", languageControllers.addLenguages);
router.delete("/:id", languageControllers.deleteLenguage);

export default router;