import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { AllUsers, GroupMetaData } from "../lib/types";
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
    <div>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        maxWidth={250}
        margin="0 auto"
      >
        <Stack spacing={2} margin="0 auto">
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
    </div>
  );
};

export default UserList;
