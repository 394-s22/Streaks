import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckinPage from "./pages/CheckinPage";
import LogInPage from "./pages/LogInPage";
import GroupsPage from "./pages/GroupsPage";


const App: React.FunctionComponent = () => {
  const currGroup = "0";
  const currUser = "2";

  // Current date in the form YYYY-MM-DD
  const date = new Date().toISOString().substring(0, 10);

  return (
    <div className="App">
      <Routes>

        {/* <Route path="/" element={<LandingPage currentUser={currUser} />} /> */}
        <Route path="/groups" element={<GroupsPage currentUser={currUser} />} />

        <Route
          path="/checkin"
          element={
            <CheckinPage
              currentGroup={currGroup}
              currentUser={currUser}
              date={date}
            />
          }
        />

        <Route path="/" element={<LogInPage currentUser={currUser} />} />

      </Routes>
    </div>
  );
};

export default App;
