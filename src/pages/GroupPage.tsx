// @ts-nocheck
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoModal from "../components/InfoModal";
import UserList from "../components/UserList";
import { Group, GroupMetaData, User } from "../lib/types";
import { useData, setData } from "../utilities/firebase";
import { group } from "console";

interface GroupPageProps {
  currentGroup: string;
  users: User;
  setUsers: (users: User) => void;
  date: string;
  currentUser: string;
}

const GroupPage: React.FunctionComponent<GroupPageProps> = ({
  currentGroup,
  users,
  setUsers,
  date,
  currentUser,
}) => {
  const [open, setOpen] = useState(false);
  const [payout, setPayout] = useState(
    users[currentUser].groupInfo[currentGroup].payout
  );

  const [data, loading, error] = useData("/groups/" + currentGroup, null);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <h1>{error}</h1>;
  } else {
    const updateProgress = async () => {
      let new_list = data.progress[date].userIdsWhoCheckedIn;
      console.log(new_list);
      new_list.push(currentUser);
      console.log(date);
      await setData(
        `/groups/${currentGroup}/progress/${date}/userIdsWhoCheckedIn`,
        new_list
      ).catch((e) => alert(e));
    };

    const handleCheckIn = () => {
      updateProgress();
      setPayout(
        payout +
          users[currentUser].groupInfo[data.groupId].deposit / data.duration
      );
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
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton> */}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="h6" color="inherit" component="div">
                Streaks
              </Typography>
              <Typography>
                {new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Typography
            variant="overline"
            display="block"
            lineHeight={1}
            marginTop={2}
          >
            Group Name:
          </Typography>
          <Typography variant="h2" gutterBottom component="div" lineHeight={1}>
            {data.groupName}
          </Typography>
          <Typography variant="overline" display="block">
            Daily Habit:
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            {data.habit}
          </Typography>

          <Button onClick={handleOpen} color="secondary">
            Info
          </Button>
          <InfoModal handleClose={handleClose} isOpen={open} group={data} />
          <UserList
            group={data}
            users={users}
            currentUser={currentUser}
            date={date}
          />
          {!data.progress[date].userIdsWhoCheckedIn.includes(currentUser) ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCheckIn}
              sx={{ m: 3.75 }}
            >
              Check In
            </Button>
          ) : (
            <>
              <Typography>You have checked in today 🙌</Typography>
              <Typography>
                {" "}
                $
                {(
                  users[currentUser].groupInfo[data.groupId].deposit /
                  data.duration
                ).toFixed(2)}{" "}
                has been added to your payout 💸
              </Typography>
            </>
          )}
        </Box>

        <Box sx={{ bgcolor: "#aaa" }}>
          <Box
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={3}
            maxWidth={600}
          >
            <Typography>{data.memberIds.length} members</Typography>
            <Typography>Your Payout: ${payout.toFixed(2)}</Typography>
            <Typography>${data.publicPot} in the pot</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default GroupPage;
