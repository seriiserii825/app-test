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
			],
			filter: 'all'
		};
		this.onToggleLikes = (id) => {
			const index = this.state.posts.findIndex((item) => {
				return item.id === id;
			});
			const before = this.state.posts.slice(0, index);
			const old = this.state.posts[index];
			const oldLikeValue = old.liked;
			old.liked = !oldLikeValue;
			const after = this.state.posts.slice(index + 1);
			const newArr = [...before, old, ...after];

			this.setState((posts) => {
				return {
					posts: newArr
				};
			});
		}
		this.onFilter = (value) => {
			let posts = [];
			if (value !== 'liked') {
				posts = this.state.posts;
			} else {
				posts = this.state.posts.filter((item) => {
					return item.liked;
				});
			}
			return posts;
		};
	}


	render() {
		const allPosts = this.state.posts.length;
		const visiblePosts = this.onFilter('liked');

		return (
			<div className="container">
				<AppHeader allPosts={allPosts}/>
				<SearchBar onFilter={this.onFilter}/>
				<PostList
					posts={visiblePosts}
					onToggleLikes={this.onToggleLikes}
				/>
				<PostForm/>
			</div>
		)
	}
}