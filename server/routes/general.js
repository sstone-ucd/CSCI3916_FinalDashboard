//create the page using express framework then use the express router to call each method
import express from "express"; 
import {getUser} from "../controllers/general.js"
const router = express.Router(); 
//get the user 
router.get("/user/:id", getUser);
    

export default router; 