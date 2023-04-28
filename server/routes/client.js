//create the page using express framework then use the express router to call each method
import express from "express"; 

import {getProducts} from "../controllers/client.js"
const router = express.Router(); 

router.get("/products", getProducts);


export default router; 
