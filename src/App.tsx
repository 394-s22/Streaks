import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/CheckinPage";
import CheckinPage from "./pages/CheckinPage";
import GroupsPage from "./pages/GroupsPage";
import LogInPage from "./pages/LogInPage";
import GroupCreationPage from "./pages/GroupCreationPage";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const App: React.FunctionComponent = () => {
  const currGroup = "0";

  // Current date in the form YYYY-MM-DD
  const date = new Date().toISOString().substring(0, 10);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<LandingPage currentUser={currUser} />} /> */}
          {/* <Route path="/groups" element={<GroupsPage currentUser={currUser} />} /> */}

          <Route
            path="/checkin"
            element={<CheckinPage currentGroup={currGroup} date={date} />}
          />

          <Route
            path="/groups"
            element={<GroupsPage/>}
          />

          <Route path="/" element={<LogInPage />} />

          <Route path="/creategroup" element={<GroupCreationPage />} />
        </Routes>
      </div>
    </LocalizationProvider>
  );
};

export default App;
