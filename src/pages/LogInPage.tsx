import { Google } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  connectAuthEmulator,
  signInWithCredential,
} from "firebase/auth";
import {
  child,
  get,
  ref,
  set,
  connectDatabaseEmulator,
} from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COOL_RUNNERS_GROUP_ID } from "../lib/constants";
import { auth, database } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";
import { setData } from "../utilities/firebase";
interface LogInPageProps {}

const LogInPage: React.FunctionComponent<LogInPageProps> = () => {
  const { currentUser, loading } = useCurrentUser();

  let navigate = useNavigate();

  if (currentUser) {
    navigate("/groups");
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

      await setData(
        `groups/${COOL_RUNNERS_GROUP_ID}/streaks/${result.user.uid}`,
        0
      );
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
            <Typography variant="h6" component="h1" color="inherit">
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
            <Button
              variant="contained"
              onClick={handleLogin}
              color="secondary"
              style={{
                marginBottom: "30px",
              }}
            >
              Sign in with <Google style={{ paddingLeft: "5px" }} />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );

  return <div>{loginCard}</div>;
};

export default LogInPage;
