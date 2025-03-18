import React, {useState} from 'react';
import {Box, Button, Container, Drawer, IconButton, Paper, Stack, Typography, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SideBarMenu from "../SideBarMenu/index.jsx";
import PersonIcon from "@mui/icons-material/Person";
import Profile from "../Profile/index.jsx";

const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = (newOpen) => () => {
        setIsDrawerOpen(newOpen);
    };

    return (
        <>
            <SideBarMenu open={isDrawerOpen} onClose={toggleDrawer(false)}/>

            <Box p={"20px"}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box width={"30px"} height={"30px"}>
                        <IconButton size={"small"} onClick={toggleDrawer(true)} aria-label={"menu"}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>


                    <Profile/>
                </Stack>
            </Box>
            <Box p={"10px"}>
                <Container maxWidth={"xl"}>
                    <Outlet/>
                </Container>
            </Box>
        </>
    );
};

export default Layout;