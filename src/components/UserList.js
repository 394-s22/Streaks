import Stack from '@mui/material/Stack';
import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Box from '@mui/material/Box';


function UserList({users, group_users}){
    return (
        <div>
            <Stack spacing={2}>
                <Box>Item 1</Box>
                <Box>Item 2</Box>
                <Box>Item 3</Box>
            </Stack>
        </div>
    )
}

export default UserList
