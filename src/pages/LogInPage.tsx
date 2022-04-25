import { Google } from "@mui/icons-material";
import { AppBar, Box, Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COOL_RUNNERS_GROUP_ID } from "../lib/constants";
import { auth, database } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";
import { setData } from "../utilities/firebase";
interface LogInPageProps {}

const LogInPage: React.FunctionComponent<LogInPageProps> = () => {
  const { user, loading } = useCurrentUser();

  let navigate = useNavigate();

  if (user) {
    navigate("/checkin");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const path = `users/${result.user.uid}`;

    const userDoc = await get(child(ref(database), path));

    if (!userDoc.exists()) {
      await set(ref(database, path), {
        name: result.user.displayName,
        email: result.user.email,
        avatarUrl: result.user.photoURL,
        id: result.user.uid,
      });

      // const coolRunnersGroupMemberIdsRef = child(
      //   ref(database),
      //   `groups/${COOL_RUNNERS_GROUP_ID}/memberIds`
      // );

      // const coolRunnersGroupMemberIds = await get(coolRunnersGroupMemberIdsRef);

      // await set(coolRunnersGroupMemberIdsRef, [
      //   ...(coolRunnersGroupMemberIds.val() ?? []),
      //   result.user.uid,
      // ]);

      // await setData(`groups/${COOL_RUNNERS_GROUP_ID}/memberIds`, [
      //   ...(coolRunnersGroupMemberIds.val() ?? []),
      //   result.user.uid,
      // ]);
      await setData(`groups/${COOL_RUNNERS_GROUP_ID}/streaks/${result.user.uid}`, 0);
      // const streaksRef = child(
      //   ref(database),
      //   `groups/${COOL_RUNNERS_GROUP_ID}/streaks/${result.user.uid}`
      // );
      
      // await set(streaksRef, 0);
    }
  };

  const loginCard = (
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
      <Paper
        elevation={3}
        style={{
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
          top: "100px",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Please sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleLogin} color="secondary">
              Sign in with <Google style={{ paddingLeft: "5px" }} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={async () => {
                signOut(auth);
              }}
              style={{
                marginBottom: "30px",
                width: "155px",
              }}
              color="secondary"
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );

  return <div>{loginCard}</div>;
};

export default LogInPage;
