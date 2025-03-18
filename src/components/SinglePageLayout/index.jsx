import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import BasicTable from "../BasicTable/index.jsx";

const SinglePageLayout = ({name,children}) => {
    return (
        <Box>
            <Stack>
                <Typography fontWeight={500} fontSize={40} variant={"h3"}>{name}</Typography>
            </Stack>
            <Box mt={"30px"}>
                    {children}
            </Box>
        </Box>
    );
};

export default SinglePageLayout;