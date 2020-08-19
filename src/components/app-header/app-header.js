import React from 'react';
import "./app-header.scss";

const AppHeader = (props) => {
	return (
		<div className="app-header d-flex">
			<h1>Student</h1>
			<p>{props.allPosts} записей, из них понравилось {props.like}</p>
		</div>
	);
};

export default AppHeader;
