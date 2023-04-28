//use express framework for APIs
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

//import route functionality
import clientRoutes from "./routes/client.js"; 
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//import data from data folder
import User from "./models/User.js"
import {dataUser, dataProduct, dataProductStat} from "./data/index.js"
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';


//CONFIG - create the app using express framework and allow it to use imported modules
dotenv.config(); 
const app = express(); 
app.use(express.json); 
app.use(helmet()); 
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common")); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cors());


//ROUTES
//client routes are client facing features
app.use("/client", clientRoutes);
//general routes connect the user to the correct dashboard
app.use("/general", generalRoutes);  
//routes for managment/admin functionality
app.use("/management", managementRoutes); 
//routes for sales tracking (cup volume, etc)
app.use("/sales", salesRoutes); 

//MONGOOSE CONNNECTION
const PORT = process.env.PORT || 9000;

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }).then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

        //insert the users into the DB
        //User.insertMany(dataUser);
        //Product.insertMany(dataProduct); 
        //ProductStat.insertMany(dataProductStat); 
        //AffiliateStat.insertMany(dataAffiliateStat);
        //OverallStat.insertMany(dataOverallStat);
        //Transaction.insertMany(dataTransaction);

    }).catch((error) => console.log(`${error} could not connect`))
