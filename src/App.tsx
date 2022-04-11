import React, { useState } from "react";
import "./App.css";
import CheckinPage from "./pages/CheckinPage";
import { useData } from "./utilities/firebase";
import { Group, User } from "./lib/types";

import * as data from "./data";

const App: React.FunctionComponent = () => {
  const currGroup = "0";
  const currUser = "2";

  // Current date in the form YYYY-MM-DD
  const date = new Date().toISOString().substring(0, 10);

  return (
    <div className="App">
      <CheckinPage
        currentGroup={currGroup}
        currentUser={currUser}
        date={date}
      />
    </div>
  );
};

export default App;
