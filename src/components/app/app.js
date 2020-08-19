import React from "react";
import "./app.scss";
import AppHeader from "../app-header/app-header";
import SearchBar from "../search-bar/search-bar";
import PostList from "../post-list/post-list";
import PostForm from "../post-form/post-form";

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
		this.onDelete = (id) => {
			const index = this.state.posts.findIndex((elem) => elem.id === id);
			const posts = this.state.posts;
			const newArr = [...posts.slice(0, index), ...posts.slice(index + 1)];
			this.setState(({posts}) => {
				return {posts: newArr};
			});
		}
		this.onToggleLike = (id) => {
			const index = this.state.posts.findIndex((item) => item.id === id);
			let oldElem = this.state.posts[index];
			oldElem = {...oldElem, liked: !oldElem.liked};
			const newArr = [...this.state.posts.slice(0, index), oldElem, ...this.state.posts.slice(index + 1)];
			this.setState(({posts}) => ({
				posts: newArr
			}));
		}
	}

	render() {
		return (
			<div className="container">
				<AppHeader/>
				<SearchBar/>
				<PostList
					onDelete={this.onDelete}
					posts={this.state.posts}
					onToggleLike={this.onToggleLike}
				/>
				<PostForm/>
			</div>
		)
	}
}