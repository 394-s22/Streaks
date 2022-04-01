import logo from './logo.svg';
import './App.css';
import './pages/GroupPage'
import GroupPage from "./pages/GroupPage";

function App() {

    let group_object_tester = {
        "group_id": 1,
        "members": [2,3,4,5],
        "group_name": "Cool Runners",
        "habit": "Running everyday",
        "description": "This is the description where you run everyday",
        "pay_in_amt": 30.0,
        "public_pot": 0,
        "duration": 30,
        "start_date": Date(),
        "group_password": "password_secret"
    }

  return (
    <div className="App">
      <GroupPage group={group_object_tester}/>
    </div>
  );
}

export default App;
