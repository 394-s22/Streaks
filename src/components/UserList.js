import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Checkbox, Typography, IconButton } from "@mui/material";

function UserList({ users, group_users, current_user }) {
	let user_data = [];
	console.log(group_users);
	for (const user_id in group_users) {
		const user_info = users.find((element) => element.user_id === group_users[user_id]);
		user_data.push(user_info);
	}

	return (
		<div>
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
				{user_data.map((user) => (
					<Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
						<Typography>
							{user.name} {user.user_id === current_user.user_id ? "(me)" : ""}
						</Typography>
						<Checkbox checked={user.completed_today} sx={{ mr: 5 }} />
						<IconButton>👏</IconButton>
					</Box>
				))}
			</Stack>
		</div>
	);
}

export default UserList;
