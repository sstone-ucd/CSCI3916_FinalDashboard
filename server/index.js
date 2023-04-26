//use express framework for APIS
import express from 'express';
//use body parser to get the JSON data
import bodyParser from 'body-parser';
//use mongoose to store/mainpulate database
import mongoose from 'mongoose';
//use cors for cross origin sharing (make the API easier to use)
import cors from 'cors';
//use dotenv to manipulate/store environment variables used in API
import dotenv from 'dotenv';
//use helmet to protect the API
import helmet from 'helmet';
//use morgan to log API calls
import morgan from 'morgan';


//CONFIG - create the app using express framework and allow it to use imported modules
dotenv.config(); 
const app = express(); 
app.use(express.json); 
app.use(helmet()); 
app.use(helment.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common")); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cors());


app.use