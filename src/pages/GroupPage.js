import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import InfoModal from "../components/InfoModal";
import UserList from "../components/UserList";

function GroupPage({ group, users, current_user }) {
	const [open, setOpen] = useState(false);
	const [selfCheckIn, setSelfCheckIn] = useState(false);

	const handleCheckIn = () => {
		console.log("before checked in", group.progress[0].users)
		setSelfCheckIn(!selfCheckIn);
		group.progress[0].users.push(current_user)
		console.log("checked in", group.progress[0].users)
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
			<Box>
				<Typography variant="h2" gutterBottom component="div">
					{group.group_name}
				</Typography>
				<Typography variant="h6" gutterBottom component="div">
					{group.habit}
				</Typography>

				<Button onClick={handleOpen}>Info</Button>
				<InfoModal handleClose={handleClose} open={open} group={group} />
				<UserList group_users={group.members} users={users} current_user={current_user} />
				{!selfCheckIn ? (
					<Button variant="contained" onClick={handleCheckIn}>
						Check In
					</Button>
				) : (
					<Typography>You have checked in today 🙌</Typography>
				)}
			</Box>
			<Box backgroundColor="#aaa">
				<Box margin="auto" display="flex" justifyContent="space-between" alignItems="center" padding={3} maxWidth={600}>
					<Typography>{group.members.length} members.</Typography>
					<Typography>${group.public_pot} in the pot.</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default GroupPage;
