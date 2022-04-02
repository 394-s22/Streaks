import Stack from "@mui/material/Stack";
import React from "react";
import { Group, User } from "../lib/types";
import UserCard from "./UserCard";

interface UserListProps {
  group: Group;
  users: User[];
  currentUser: string;
  date: string;
}

const UserList: React.FunctionComponent<UserListProps> = ({
  group,
  users,
  currentUser,
  date,
}) => {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            currentUser={currentUser}
            group={group}
            date={date}
          />
        ))}
      </Stack>
    </div>
  );
};

export default UserList;
