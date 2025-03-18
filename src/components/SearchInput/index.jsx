import React from 'react';
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchInput = () => {
    return (
        <Box width={"55%"}>
        <TextField
            fullWidth={true}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    ),
                },
            }}
            size={"small"}>

        < /TextField>
        </Box>
    );
};

export default SearchInput;