import Stack from "@mui/material/Stack";
import React, { useState } from "react";


import User from './User.js';


import { Checkbox, Typography, IconButton } from "@mui/material";

// import { useData } from '../utilities/firebase.js';

function UserList({group_users, users, current_user, checkin }) {
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
					<User user={user} current_user={current_user}/>
				))}
			</Stack>
		</div>
	);
}

export default UserList;
