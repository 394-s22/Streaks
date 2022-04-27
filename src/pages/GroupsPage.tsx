import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserInfo } from "../lib/types";
import { useData, database } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
interface GroupsPageProps {
  currentUser: string;
}



const GroupsPage: React.FunctionComponent = () => {
  const { currentUser } = useCurrentUser();
  const [data, loading, error] = useData("users/" + "2");
  console.log(data);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Typography variant="h6" color="inherit" component="div">
              Streaks
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Link to="/checkin">
        <button>Group 1</button>
      </Link>
    </>
  );
};

export default GroupsPage;
