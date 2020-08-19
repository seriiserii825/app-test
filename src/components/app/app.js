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
			searchText: ''
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
		this.createId = (items) => {
			let maxId = 0;
			items.forEach((item) => {
				if(item.id > 0){
					maxId = item.id;
				}
			});
			return maxId;
		}
		this.onAddPost = (body) => {
			let maxId = this.createId(this.state.posts);
			maxId = ++maxId;
			const newPost = {title: body, liked: false, id: maxId};
			const newArr = [...this.state.posts, newPost];

			this.setState(({posts}) => ({
				posts: newArr
			}));
		}
		this.onSearch = (searchText) => {
			this.setState({
				searchText: searchText
			});
		}
		this.onUpdatePosts = (items, searchStr) => {
			if(searchStr.length < 2){
				return items;
			}else{
				const searchArr = items.filter((item) => {
					return item.title.indexOf(searchStr) > -1;
				});
				return searchArr;
			}
		}
	}

	render() {
		const allPosts = this.state.posts.length;
		const likedPosts = this.state.posts.filter((elem) => elem.liked).length;
		const visiblePosts = this.onUpdatePosts(this.state.posts, this.state.searchText);
		return (
			<div className="container">
				<AppHeader
					allPosts={allPosts}
					likedPosts={likedPosts}
				/>
				<SearchBar
					onSearch={this.onSearch}
				/>
				<PostList
					onDelete={this.onDelete}
					posts={visiblePosts}
					onToggleLike={this.onToggleLike}
				/>
				<PostForm
					onAddPost={this.onAddPost}
				/>
			</div>
		)
	}
}