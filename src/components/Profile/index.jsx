import React from 'react';
import PersonIcon from "@mui/icons-material/Person";
import {Avatar, IconButton, Menu, MenuItem, Stack, Typography} from "@mui/material";
const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Stack
                sx={{cursor:"pointer"}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} direction={"row"} gap={"10px"} alignItems={"center"}>
                <Avatar>АБ</Avatar>
                <Typography variant={"p"} fontSize={16}>Alex Brown</Typography>
            </Stack>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
            </Menu>
        </>

);
};



export default Profile;