import React from 'react'; 
import {
    Box, 
    Card, 
    CardActions, 
    CardContent, 
    Collapse, 
    Button, 
    Typography, 
    Rating, 
    useTheme, 
    useMediaQuery, 
} from "@mui/material"; 
import { useGetPatientsQuery } from 'state/api';
import Header from 'components/Header';

function Patients() {
    //get data from the server or check if data is still loading with redux tookit bool
    const {data, isLoading} = useGetPatientsQuery(); 
    console.log("data", data); 
    return (
        <Box>
            <Header title = "PATIENTS" subtitle={"Recently seen patients"} />

        </Box>
  );
}

export default Patients