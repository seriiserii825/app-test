import React from "react";
import "./app.scss";
import AppHeader from "../app-header/app-header";
import SearchBar from "../search-bar/search-bar";

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<AppHeader/>
				<SearchBar/>
			</div>
		)
	}
}