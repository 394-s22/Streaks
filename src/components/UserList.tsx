import Stack from "@mui/material/Stack";
import React from "react";
import { Group, GroupMetaData, User } from "../lib/types";
import UserCard from "./UserCard";

interface UserListProps {
  group: GroupMetaData;

  users: User;
  currentUser: string;
  date: string;
}

const UserList: React.FunctionComponent<UserListProps> = ({
  group,
  users,
  currentUser,
  date,
}) => {

 let sorted = Object.entries(group.streaks).sort((a,b) => {
   return b[1]-a[1]
 })




  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {sorted.map((pair) => (
          <UserCard
            key={pair[0]}
            user={users[pair[0]]}
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
