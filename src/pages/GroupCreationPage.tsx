import { TextField, Grid, Paper, Typography, Button } from "@mui/material/";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GroupCreationPage: React.FunctionComponent = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (newValue: Date | null) => {
    setDate(newValue);
  };
  return (
    <Paper
      elevation={3}
      style={{
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        top: "100px",
        position: "relative",
        padding: "10px",
      }}
    >
      <Typography variant="h3">Create a group</Typography>
      <Grid
        container
        spacing={2}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
      >
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Group Name"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Group Habit"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary">
            Continue <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GroupCreationPage;
