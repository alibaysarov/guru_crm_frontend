import React from 'react';
import {Stack} from "@mui/material";
import BasicTable from "../../components/BasicTable/index.jsx";
import SinglePageLayout from "../../components/SinglePageLayout/index.jsx";

const Tags = () => {
    return (
        <SinglePageLayout name={"Тэги"}>
            <Stack gap={"10px"}>
                <BasicTable/>
            </Stack>
        </SinglePageLayout>
    );
};

export default Tags;