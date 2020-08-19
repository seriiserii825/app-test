import React from "react";
import "./app-header.scss";

const AppHeader = (props) => {
	return (
		<div className="app-header">
			<h2>Student</h2>
			<p>{props.allPosts} записей, из них понравилось {props.likedPosts}</p>
		</div>
	)
};
export default AppHeader;