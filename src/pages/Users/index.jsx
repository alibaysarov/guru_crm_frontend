import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import BasicTable from "../../components/BasicTable/index.jsx";
import SinglePageLayout from "../../components/SinglePageLayout/index.jsx";

const UsersPage = () => {
    return (
        <SinglePageLayout name={"Пользователи"}>
            <Stack gap={"10px"}>
                <BasicTable/>
            </Stack>
        </SinglePageLayout>
    );
};

export default UsersPage;