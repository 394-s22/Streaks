import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import InfoModal from "../components/InfoModal";
import UserList from "../components/UserList";

function GroupPage({ group, users }) {
	const [open, setOpen] = useState(false);
	const [selfCheckIn, setSelfCheckIn] = useState(false);

	const handleCheckIn = () => {
		setSelfCheckIn(!selfCheckIn);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Typography variant="h2" gutterBottom component="div">
				{group.group_name}
			</Typography>
			<Typography variant="h6" gutterBottom component="div">
				{group.habit}
			</Typography>

			<Button onClick={handleOpen}>Info</Button>
			<InfoModal handleClose={handleClose} open={open} group={group} />
			<UserList group_users={group.members} users={users} />
			{!selfCheckIn ? (
				<Button variant="contained" onClick={handleCheckIn}>
					Check In
				</Button>
			) : (
				<Typography>You have checked in today 🙌</Typography>
			)}
		</div>
	);
}

export default GroupPage;
