import React, { useState } from "react";
import "./../styles/App.css";
import Tab from "./Tab";
const App = () => {
	let [tabs, setTabs] = useState([
		{ title: "Tab 1", content: "Tab 1" },
		{ title: "Tab 2", content: "Tab 2" },
		{ title: "Tab 3", content: "Tab 3" },
	]);

	return <div>{/* Do not remove the main div */ <Tab tabs={tabs} />}</div>;
};

export default App;
