import logo from './logo.svg';
import './App.css';
import './pages/GroupPage'
import GroupPage from "./pages/GroupPage";

function App() {

    let group_object_tester = {
        "group_name": "Cool Runners",
        "habit": "Running everyday"
    }

  return (
    <div className="App">
      <GroupPage group={group_object_tester}/>
    </div>
  );
}

export default App;
