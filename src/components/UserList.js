import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import { Checkbox, Typography, IconButton } from "@mui/material";

// import { useData } from '../utilities/firebase.js';

function UserList({group_users, users, current_user }) {
	// let user_data = [];
	// let group_data = [];
	// let group_users = [];


	// const [data, loading, error] = useData('/', getData); 
	// function getData(data){
	// 	user_data = data.users
	// 	group_data = data.groups[0]
	// 	getGroupUsers(user_data, group_data.members)
		
	// }
	// function getGroupUsers(users, groupMembers){
	// 	console.log('in getusers', users, groupMembers)
	// 	group_users = users.filter(user => user.user_id in groupMembers)
	// }
	// if (loading) return <h1>Loading data ....</h1>
	// if (error) return <h1>{error}</h1>

	console.log("users:",users, " groupMembers", group_users)
	

	

	return (
		<div>
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
				{users.map((user) => (
					<Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
						<Box>
							<Typography>
								{user.name} {user.user_id === current_user? "(me)" : ""}
							</Typography>
							<Typography>
								checked
							</Typography>
							
							
							
						</Box>
						<Checkbox checked={user.completed_today} sx={{ mr: 5 }} />
						
						
						<IconButton>👏</IconButton>
					</Box>
				))}
			</Stack>
		</div>
	);
}

export default UserList;
