import { Box, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { Group, GroupMetaData, AllUsers } from "../lib/types";
import UserCard from "./UserCard";

interface UserListProps {
  group: GroupMetaData;

  users: AllUsers;
  currentUser: string;
  date: string;
}

const UserList: React.FunctionComponent<UserListProps> = ({
  group,
  users,
  currentUser,
  date,
}) => {
  let sorted = Object.entries(group.streaks).sort((a, b) => {
    return b[1] - a[1];
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
        maxWidth="600"
        sx={{ p: 2 }}
      >
        {sorted.map((pair, index) => (
          <UserCard
            key={pair[0]}
            user={users[pair[0]]}
            currentUser={currentUser}
            group={group}
            date={date}
            position={index}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default UserList;
