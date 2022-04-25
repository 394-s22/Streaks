import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { GroupMetaData, UserInfo } from "../lib/types";

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
      alignItems="center"
      maxWidth="250px"
      width="100%"
    >
      <Box sx={{ p: 1 }}>
        {position <= 2 ? medals[position] : <Box width={30}></Box>}
      </Box>

      <Box textAlign="left" flex="1">
        <Typography
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ fontWeight: 600 }}
        >
          {user.name} {user.id === currentUser ? "(me)" : ""}
        </Typography>

        <Typography>
          Streak: {group.streaks[user.id]} day
          {group.streaks[user.id] === 1 ? "" : "s"}
        </Typography>
      </Box>

      <Box sx={{ p: 1 }}>
        {!progress[date] ? (
          <></>
        ) : progress[date].userIdsWhoCheckedIn.includes(user.id) ? (
          <CheckCircleIcon color="success" sx={{ ml: 1, fontSize: 20 }} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default UserCard;
