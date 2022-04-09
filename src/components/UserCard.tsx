import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton, Typography, Icon } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Group, GroupMetaData, User, UserInfo } from "../lib/types";
import ChatIcon from "@mui/icons-material/Chat";

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
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      maxWidth="600px"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box sx={{ p: 1 }}>
            {position <= 2 ? medals[position] : <Box width={30}></Box>}
          </Box>
          <Box textAlign="left">
            <Typography
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ fontWeight: 600 }}
            >
              {user.name} {user.id === currentUser ? "(me)" : ""}
              {!progress[date] ? (
                <></>
              ) : progress[date].userIdsWhoCheckedIn.includes(user.id) ? (
                <CheckCircleIcon color="success" sx={{ ml: 1, fontSize: 20 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ ml: 1, fontSize: 20 }} />
              )}
            </Typography>
            <Typography>
              Streak: {group.streaks[user.id]} day
              {group.streaks[user.id] == 1 ? "" : "s"}
            </Typography>
          </Box>
        </Box>
        {user.id === currentUser ? (
          <IconButton>
            <ChatIcon />
          </IconButton>
        ) : (
          <IconButton>👏</IconButton>
        )}
      </Box>
    </Box>
  );
};

export default UserCard;
