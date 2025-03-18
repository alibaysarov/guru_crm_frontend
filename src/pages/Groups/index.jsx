import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import BasicTable from "../../components/BasicTable/index.jsx";
import SearchInput from "../../components/SearchInput/index.jsx";
import SinglePageLayout from "../../components/SinglePageLayout/index.jsx";

const GroupPage = () => {
    return (
        <SinglePageLayout name={"Группы"}>
            <Stack gap={"10px"}>
                <BasicTable/>
            </Stack>
        </SinglePageLayout>
    );
};

export default GroupPage;