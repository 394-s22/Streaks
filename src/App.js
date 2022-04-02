import logo from "./logo.svg";
import "./App.css";
import "./pages/GroupPage";
import GroupPage from "./pages/GroupPage";

let data = require('./data.json')
console.log(data)

function App() {
	//[appData, setAppData] = useState(data);


	return (
		<div className="App">
			<GroupPage group={data.groups[0]} users={data.users} current_user={2} />
		</div>
	);
}

export default App;
