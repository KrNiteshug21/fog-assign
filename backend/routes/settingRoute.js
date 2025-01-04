import express from "express";
const router = express.Router();
import {
  getSettings,
  createSetting,
  updateSetting,
} from "../controller/settingController.js";

router.get("/", getSettings);
router.post("/", createSetting);
router.put("/:id", updateSetting);

export default router;
