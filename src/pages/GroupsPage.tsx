import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Group, UserInfo } from "../lib/types";
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
import { group } from "console";

interface GroupsPageProps {
  currentUser: string;
}

const GroupsPage: React.FunctionComponent = () => {
  const { currentUser } = useCurrentUser();
  const [data, loading, error] = useData("users/" + "2");
  const [groupData, groupLoading, groupError] = useData<Group>("groups/");
  console.log(data);

  if (!currentUser) {
    return <p></p>;
  } else {
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

        <Box marginTop={"100px"} display={"flex"} justifyContent="center">
          {groupData ? (
            console.log(Object.values(groupData)[0])
          ) : (
            <p>IN HERE</p>
          )}
          {groupData ? (
            Object.values(groupData).map((group) => {
              return (
                <Paper
                  elevation={3}
                  style={{ borderRadius: "25px", width: "50%", padding:"3%"}}
                >
                  <Typography variant="h4" color="inherit" component="div">
                    {group.groupName}
                  </Typography>

                  <Typography variant="caption" color="inherit" component="div">
                    {group.description}
                  </Typography>
                  <Link to="/checkin" style={{ textDecoration: "none" }}>
                    <Button color="secondary" variant="contained">Visit {group.groupName}</Button>
                  </Link>
                </Paper>
              );
            })
          ) : (
            <p>IN HERE</p>
          )}
        </Box>
        {/* <Link to="/checkin"></Link> */}
      </>
    );
  }
};

export default GroupsPage;
