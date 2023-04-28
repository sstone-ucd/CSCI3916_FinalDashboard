//create the page using express framework then use the express router to call each method
import express from "express";
import { getSales } from "../controllers/sales.js";

const router = express.Router();

router.get("/sales", getSales);

export default router;
