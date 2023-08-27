import React, { useState } from "react";

const Tab = (props) => {
	let [tab, setTab] = useState("");
	return (
		<div>
			<ul>
				props.tabs.map(item = (
				<li onClick={setTab(item.content)}>item.title</li>
				))
			</ul>
			<p>This is the content for {item.content}</p>
		</div>
	);
};

export default Tab;
