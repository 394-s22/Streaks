import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { green } from '@mui/material/colors';
import { Checkbox, Typography, IconButton } from "@mui/material";

function User({user, current_user}) {


    return (
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Box>
            <Typography>
                {user.name} {user.user_id === current_user? "(me)" : ""}
            </Typography>
            <Typography>
                checked
            </Typography>
        
        </Box>
        
        <CheckCircleIcon color="success"></CheckCircleIcon>
        
        <IconButton>👏</IconButton>
    </Box>);
}

export default User;