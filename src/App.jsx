// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faEnvelope,
// 	faDollarSign,
// 	faBookOpen,
// } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Courses from "./components/Courses/Courses";

function App() {
	return (
		<div className="text-3xl font-bold underline text-center">
			<h1>Course registration</h1>
			<Courses></Courses>
		</div>
	);
}

export default App;
