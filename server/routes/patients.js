import express from "express";
import { getPatients } from "../controllers/patients.js";
const router = express.Router(); 

router.get("/patients", getPatients); 

export default router;