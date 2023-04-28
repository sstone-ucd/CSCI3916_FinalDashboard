//create the page using express framework then use the express router to call each method
import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
