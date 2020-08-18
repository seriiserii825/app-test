import React from "react";
import "./app.scss";
import AppHeader from "../app-header/app-header";
import SearchBar from "../search-bar/search-bar";
import PostList from "../post-list/post-list";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{title: "How to buy a car?", liked: false, id: 1},
				{title: "Wonderful world", liked: false, id: 2},
				{title: "Respect the rules", liked: true, id: 3},
				{title: "Have a nice holidays", liked: false, id: 4},
				{title: "Weather for the next week", liked: true, id: 5},
				{title: "Sports news", liked: true, id: 6},
			]
		};
	}

	render() {
		return (
			<div className="container">
				<AppHeader/>
				<SearchBar/>
				<PostList posts={this.state.posts} />
			</div>
		)
	}
}