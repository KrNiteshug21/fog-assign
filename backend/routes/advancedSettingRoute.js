import express from "express";
const router = express.Router();
import {
  getAdvancedSettings,
  createAdvancedSetting,
  updateAdvancedSetting,
} from "../controller/advanceSettingController.js";

router.get("/", getAdvancedSettings);
router.post("/", createAdvancedSetting);
router.put("/:id", updateAdvancedSetting);

export default router;
