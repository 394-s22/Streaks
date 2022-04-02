import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./pages/GroupPage";
import GroupPage from "./pages/GroupPage";

let data = require("./data.json");
console.log(data);

function App() {
  //[appData, setAppData] = useState(data);
  const [group, setGroup] = useState(data.groups[0]);
  const [users, setUsers] = useState(data.users);
  const curr_user = 2;
  const date = "2022-04-01";

  return (
    <div className='App'>
      <GroupPage
        group={group}
        setGroup={setGroup}
        users={users}
        setUsers={setUsers}
        current_user={curr_user}
        date={date}
      />
    </div>
  );
}

export default App;
