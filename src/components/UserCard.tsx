import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Group, GroupMetaData, User, UserInfo } from "../lib/types";

interface UserCardProps {
  user: UserInfo;
  group: GroupMetaData;
  currentUser: string;
  date: string;
}



const UserCard: React.FunctionComponent<UserCardProps> = ({
  user,
  currentUser,
  group,
  date,
}) => {
  const progress = group.progress;
  console.log(date);
  console.log(group.progress[date]);
  let medals = [
    <IconButton>🥇</IconButton>,
    <IconButton>🥈</IconButton>,
    <IconButton>🥉</IconButton>
  ]
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography>
          {user.name} {user.id === currentUser ? "(me)" : ""}
        </Typography>
        <Typography>Streak: {group.streaks[user.id]} days.</Typography>
      </Box>

      {progress[date].userIdsWhoCheckedIn.includes(user.id) ? (
        <CheckCircleIcon color="success" />
      ) : (
        <RadioButtonUncheckedIcon />
      )}

      <IconButton>👏</IconButton>
      
    </Box>
  );
};

export default UserCard;
