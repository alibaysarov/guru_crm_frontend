import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography, useTheme
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {menuList} from "./menu.js";
import {Link} from "react-router-dom";
const SideBarMenu = ({open,onClose}) => {
    const theme = useTheme();

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <Box px={"16px"} py={"10px"}>
                <Typography fontWeight={600} variant={"h5"}>
                    GURU
                    <Typography variant={"span"} fontWeight={600}
                                sx={{color: theme.palette.primary.main}}>CRM</Typography>
                </Typography>
            </Box>

            <List>
                {menuList.map((menuItem, index) => (
                    <ListItem key={menuItem.link} disablePadding>
                        <ListItemButton component={Link} to={menuItem.link}>
                            <ListItemIcon>
                                {React.createElement(menuItem.icon)}
                            </ListItemIcon>
                            <ListItemText primary={menuItem.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </Box>
    );

    return (
        <Drawer open={open} onClose={onClose}>
            {DrawerList}
        </Drawer>
    );
};

export default SideBarMenu;