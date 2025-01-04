import express from "express";
const router = express.Router();
import {
  getRules,
  createRule,
  updateRule,
} from "../controller/rulesContoller.js";

router.get("/", getRules);
router.post("/", createRule);
router.put("/:id", updateRule);

export default router;
