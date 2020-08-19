import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.scss";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{label: "First post", important: true, like: false, id: 1},
				{label: "Second post", important: false, like: true, id: 2},
				{label: "Third post", important: true, like: false, id: 3},
				{label: "Fourth post", important: false, like: false, id: 4},
			],
			maxId: 4
		}
		this.onDelete = (id) => {
			const index = this.state.posts.findIndex((elem) => elem.id === id);
			const before = this.state.posts.slice(0, index);
			const after = this.state.posts.slice(index + 1);
			const newArr = [...before, ...after];

			this.setState((posts) => {
				return {
					posts: newArr
				}
			});
		}
		this.onAddPost = (body) => {
			const newPost = {label: body, important: false, like: false, id: this.state.maxId++};

			this.setState((state) => {
				const newArr = [...state.posts, newPost];
				return {
					posts: newArr
				}
			});
		}

		this.onToggleProperty = (id, property) => {
			const {posts} = this.state;
			const index = posts.findIndex((elem) => elem.id === id);
			const oldElem = posts[index];
			const newElem = {...oldElem, [property]: !oldElem[property]};
			const newArr = [...posts.slice(0, index), newElem, ...posts.slice(index + 1)];

			this.setState(({posts}) => {
				return {
					posts: newArr
				}
			});
		}

		this.onToggleImportant = (id) => {
			this.onToggleProperty(id, 'important');
		}

		this.onToggleLike = (id) => {
			this.onToggleProperty(id, 'like');
		}
	}

	render() {
		const likes = this.state.posts.filter((item) => item.like).length;
		const allPosts = this.state.posts.length;
		return (
			<div className="app">
				<AppHeader like={likes} allPosts={allPosts} />
				<div className="search-panel d-flex">
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList onToggleLike={this.onToggleLike} onToggleImportant={this.onToggleImportant}
						  posts={this.state.posts} onDelete={this.onDelete}/>
				<PostAddForm onAddPost={this.onAddPost}/>
			</div>
		);
	}
};

