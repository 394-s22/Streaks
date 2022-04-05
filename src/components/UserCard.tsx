import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton, Typography, Icon } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Group, GroupMetaData, User, UserInfo } from "../lib/types";

interface UserCardProps {
  user: UserInfo;
  group: GroupMetaData;
  currentUser: string;
  date: string;
  position: number;
}

const UserCard: React.FunctionComponent<UserCardProps> = ({
  user,
  currentUser,
  group,
  date,
  position,
}) => {
  const progress = group.progress;
  console.log(date);
  console.log(group.progress[date]);
  let medals = [
    <Typography role="img" fontSize={30}>
      🥇
    </Typography>,
    <Typography role="img" fontSize={30}>
      🥈
    </Typography>,
    <Typography role="img" fontSize={30}>
      🥉
    </Typography>,
  ];
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row">
        <Box>{position <= 2 ? medals[position] : <></>}</Box>
        <Box textAlign="left">
          <Typography>
            {user.name} {user.id === currentUser ? "(me)" : ""}
          </Typography>
          <Typography>Streak: {group.streaks[user.id]} days.</Typography>
        </Box>
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
