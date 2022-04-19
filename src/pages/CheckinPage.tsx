// @ts-nocheck
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, AppBar, Toolbar, Paper } from "@mui/material";
import InfoModal from "../components/InfoModal";
import AddProofModal from "../components/AddProofModal";
import UserList from "../components/UserList";
import { useData, setData } from "../utilities/firebase";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RuleIcon from "@mui/icons-material/Rule";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FeedPage from "./FeedPage";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

interface CheckinPageProps {
  currentGroup: string;
  date: string;
  currentUser: string;
}

const CheckinPage: React.FunctionComponent<CheckinPageProps> = ({
  currentGroup,
  date,
  currentUser,
}) => {
  const [open, setOpen] = useState(false);
  const [proofOpen, setProofOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const [data, loading, error] = useData("/groups/" + currentGroup);
  const [usersData, userLoading, userError] = useData("/users");

  let navigate = useNavigate();

  if (1 != 1) {
  }

  // Adds the current date to database (with an array with just an empty string)
  const addNewDate = async () => {
    await setData(
      `/groups/${currentGroup}/progress/${date}/userIdsWhoCheckedIn`,
      [""]
    );
  };

  if (loading || userLoading) {
    return <p>Loading...</p>;
  } else if (error || userError) {
    return <p>{error}</p>;
  } else if (userError) {
    return <p>{userError}</p>;
  } else {
    // adds the current date to the database if it doesn't exist
    if (!data.progress[date]) {
      addNewDate();
    }

    const updateProgress = async () => {
      let new_list = data.progress[date].userIdsWhoCheckedIn;
      console.log(new_list);
      new_list.push(currentUser);
      let likes_arr = [currentUser];
      await setData(
        `/groups/${currentGroup}/progress/${date}/userIdsWhoCheckedIn`,
        new_list
      ).catch((e) => alert(e));
      await setData(
        `/groups/${currentGroup}/progress/${date}/userReactions/${currentUser}/likes`,
        likes_arr
      ).catch((e) => alert(e));
      await setData(
        `/groups/${currentGroup}/streaks/${currentUser}`,
        data.streaks[currentUser] + 1
      ).catch((e) => alert(e));
    };
    const updatePayout = async () => {
      let newPayout =
        usersData[currentUser].groupInfo[currentGroup].payout +
        usersData[currentUser].groupInfo[data.groupId].deposit / data.duration;
      await setData(
        `/users/${currentUser}/groupInfo/${currentGroup}/payout`,
        newPayout
      ).catch((e) => alert(e));
    };

    const handleCheckIn = () => {
      updateProgress();
      updatePayout();
    };

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const openProofModal = () => {
      setProofOpen(true);
    };
    const closeProofModal = () => {
      setProofOpen(false);
    };

    // removes check in and reduces streak
    const handleUndoCheckIn = async () => {
      let new_list = data.progress[date].userIdsWhoCheckedIn;
      new_list.pop();
      await setData(
        `/groups/${currentGroup}/progress/${date}/userIdsWhoCheckedIn`,
        new_list
      ).catch((e) => alert(e));
      await setData(
        `/groups/${currentGroup}/streaks/${currentUser}`,
        data.streaks[currentUser] - 1
      ).catch((e) => alert(e));
    };

    return (
      <Box>
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
            <Button
              onClick={async () => {
                signOut(auth);
                navigate("/");
              }}
              variant="contained"
              sx={{ ml: 2 }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        {pageNumber === 0 ? (
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            height="100%"
            paddingBottom={6}
          >
            <Box>
              <Typography
                variant="overline"
                display="block"
                lineHeight={1}
                marginTop={2}
              >
                Group Name:
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                component="div"
                lineHeight={1}
              >
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
              <AddProofModal
                handleClose={closeProofModal}
                isOpen={proofOpen}
                handleCheckIn={handleCheckIn}
                currentDate={date}
                currentUser={currentUser}
                currentGroup={currentGroup}
              />
              <UserList
                group={data}
                users={usersData}
                currentUser={currentUser}
                date={date}
              />
              {!data.progress[date] ? (
                <></>
              ) : !data.progress[date].userIdsWhoCheckedIn.includes(
                  currentUser
                ) ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={openProofModal}
                  sx={{ m: 3.75 }}
                >
                  Check In
                </Button>
              ) : (
                <>
                  <Typography>You have checked in today 🙌</Typography>
                  <Button onClick={() => handleUndoCheckIn()}>
                    Undo Check In
                  </Button>
                  {/* <Typography>
                    {" "}
                    $
                    {(
                      usersData[currentUser].groupInfo[data.groupId].deposit /
                      data.duration
                    ).toFixed(2)}{" "}
                    has been added to your payout 💸
                  </Typography> */}
                </>
              )}
            </Box>
          </Box>
        ) : (
          <FeedPage
            userData={usersData}
            currentDate={date}
            group={data}
            currentUser={currentUser}
          />
        )}
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={10}
        >
          <BottomNavigation
            showLabels
            value={pageNumber}
            onChange={(event, newValue) => {
              setPageNumber(newValue);
            }}
          >
            <BottomNavigationAction label="Check-In" icon={<RuleIcon />} />
            <BottomNavigationAction label="Feed" icon={<EmojiPeopleIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    );
  }
};

export default CheckinPage;
