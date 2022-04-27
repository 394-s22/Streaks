import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import RuleIcon from "@mui/icons-material/Rule";
import { AppBar, Box, Button, Paper, Toolbar, IconButton } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AllUsers, GroupMetaData } from "../lib/types";
import { auth, setData, useData } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";
import FeedPage from "./FeedPage";
import StreaksList from "./StreaksList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface CheckinPageProps {
  currentGroup: string;
  date: string;
}

const CheckinPage: React.FunctionComponent<CheckinPageProps> = ({
  currentGroup,
  date,
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const [data, loading, error] = useData<GroupMetaData>(
    "/groups/" + currentGroup
  );
  const [usersData, userLoading, userError] = useData<AllUsers>("/users");
  const { currentUser } = useCurrentUser();

  let navigate = useNavigate();

  useEffect(() => {
    if (!data?.progress) return;

    if (!data.progress[date]) {
      // adds the current date to the database if it doesn't exist
      setData(`/groups/${currentGroup}/progress/${date}/userIdsWhoCheckedIn`, [
        "",
      ]);
    }
  }, [data?.progress, currentGroup, date]);

  if (loading || userLoading) {
    return <p>Loading...</p>;
  } else if (error || userError) {
    return <p>{error}</p>;
  } else if (userError) {
    return <p>{userError}</p>;
  } else if (!data || !currentUser || !usersData) {
    return <p>Loading... wow</p>;
  }

  return (
    <Box paddingBottom="50px">
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6" color="inherit" component="h1">
              <Link to="/groups">
                <IconButton>
                  <ArrowBackIcon sx={{ fill: "#fff" }} />
                </IconButton>
              </Link>
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
        <StreaksList groupInfo={data} date={date} />
      ) : (
        <FeedPage
          userData={Object.values(usersData)}
          currentDate={date}
          group={data}
          currentUser={currentUser.id}
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
};

export default CheckinPage;
