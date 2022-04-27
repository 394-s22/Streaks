import { AppBar, Box, Button, Paper, Toolbar, IconButton } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AllUsers, GroupMetaData } from "../lib/types";
import { auth, setData, useData } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";

const SignOutButton: React.FunctionComponent = () => {
  const { currentUser } = useCurrentUser();
  let navigate = useNavigate();

  return (
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
  );
};

export default SignOutButton;
