import React, {useState} from 'react'
import { Box, useMediaQuery } from '@mui/material';
//use outlet from dom to create template layouts
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";

//layout used to set up the box of the page and will include the navbar.
//The specific page data will be plugged into Outlet
const Layout = () => {
    //Check if device is mobile or non by checking the width, then determine if sidebar is open
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
    //Grab user Id using the api.js call 
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);
    return <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
            user = {data || {}}
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
            <Navbar 
                user = {data || {}}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet />
        </Box>
    </Box>;

};

export default Layout;