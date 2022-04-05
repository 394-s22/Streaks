import React, { useState } from "react";
import "./App.css";
import "./pages/GroupPage";
import GroupPage from "./pages/GroupPage";

import * as data from "./data";

const App: React.FunctionComponent = () => {
  const currGroup = '0';
  const [group, setGroup] = useState(data.groups[currGroup]);
  const [users, setUsers] = useState(data.users);
  const currUser = "2";
  const date = "2022-04-01";

  return (
    <div className="App">
      <GroupPage
        group={group}
        currentGroup = {currGroup}
        setGroup={setGroup}
        users={users}
        setUsers={setUsers}
        currentUser={currUser}
        date={date}
      />
    </div>
  );
};

export default App;
