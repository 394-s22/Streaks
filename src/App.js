import logo from './logo.svg';
import './App.css';
import './pages/GroupPage'
import GroupPage from "./pages/GroupPage";

let group_object_tester = {
    "group_id": 1,
    "members": [2,3],
    "group_name": "Cool Runners",
    "habit": "Running everyday",
    "description": "This is the description where you run everyday",
    "pay_in_amt": 30.0,
    "public_pot": 0,
    "duration": 30,
    "start_date": Date(),
    "group_password": "password_secret"
}

let user1 = {
    "user_id": 2,
    "name": "John Rob",
    "email": "john@gmail.com",
    "cellphone_number": "462-618-8939",
    "group_info": []
}

let user2 = {
    "user_id": 3,
    "name": "Bloody Mary",
    "email": "bMary@gmail.com",
    "cellphone_number": "472-968-0939",
    "group_info": []
}

let users = [user1, user2]

function App() {

  return (
    <div className="App">
      <GroupPage group={group_object_tester} users={users}/>
    </div>
  );
}

export default App;
