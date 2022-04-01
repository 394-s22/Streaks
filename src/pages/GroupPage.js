import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Box, Button} from "@mui/material";
import InfoModal from "../components/InfoModal";


function GroupPage({group}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="h2"
                        gutterBottom
                        component="div"
            >
                {group.group_name}
            </Typography>
            <Typography variant="h6"
                        gutterBottom
                        component="div"
            >
                {group.habit}
            </Typography>

            <Button onClick={handleOpen}>Info</Button>
            <InfoModal handleClose={handleClose} open={open} group={group}/>
        </div>
    )
}

export default GroupPage
