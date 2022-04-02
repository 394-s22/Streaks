import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import InfoModal from "../components/InfoModal";
import UserList from "../components/UserList";
import { Group, User } from "../lib/types";

interface GroupPageProps {
  group: Group;
  setGroup: (group: Group) => void;
  users: User[];
  setUsers: (users: User[]) => void;
  date: string;
  currentUser: string;
}

const GroupPage: React.FunctionComponent<GroupPageProps> = ({
  group,
  setGroup,
  users,
  setUsers,
  date,
  currentUser,
}) => {
  const [open, setOpen] = useState(false);
  const [selfCheckIn, setSelfCheckIn] = useState(false);

  const handleCheckIn = () => {
    console.log("before checked in", group.progress[date].userIdsWhoCheckedIn);
    setSelfCheckIn(!selfCheckIn);
    const updatedGroup = group;
    updatedGroup.progress[date].userIdsWhoCheckedIn.push(currentUser);
    setGroup(updatedGroup);
    console.log("checked in", group.progress[date].userIdsWhoCheckedIn);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      height="100%"
    >
      <Box>
        <Typography variant="h2" gutterBottom component="div">
          {group.groupName}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {group.habit}
        </Typography>

        <Button onClick={handleOpen}>Info</Button>
        <InfoModal handleClose={handleClose} isOpen={open} group={group} />
        <UserList
          group={group}
          users={users}
          currentUser={currentUser}
          date={date}
        />
        {!selfCheckIn ? (
          <Button variant="contained" onClick={handleCheckIn}>
            Check In
          </Button>
        ) : (
          <Typography>You have checked in today 🙌</Typography>
        )}
      </Box>

      <Box>
        <Box
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={3}
          maxWidth={600}
        >
          <Typography>{group.memberIds.length} members.</Typography>
          <Typography>${group.publicPot} in the pot.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupPage;
