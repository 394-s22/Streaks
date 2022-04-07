import React, { useState } from "react";
import "./App.css";
import "./pages/GroupPage";
import GroupPage from "./pages/GroupPage";
import { useData } from "./utilities/firebase";
import { Group, User } from "./lib/types";

import * as data from "./data";

const App: React.FunctionComponent = () => {
  const currGroup = "0";
  const [users, setUsers] = useState(data.users);
  const currUser = "2";
  const date = "2022-04-01";

  return (
    <div className="App">
      <GroupPage
        currentGroup={currGroup}
        users={users}
        setUsers={setUsers}
        currentUser={currUser}
        date={date}
      />
    </div>
  );
};

export default App;
