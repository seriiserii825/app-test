import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.scss";

const App = () => {
	const posts = [
		{label: "First post", important: true, like: false, id: 1},
		{label: "Second post", important: false, like: true, id: 2},
		{label: "Third post", important: true, like: false, id: 3},
		{label: "Fourth post", important: false, like: false, id: 4},
	];
	return (
		<div className="app">
			<AppHeader/>
			<div className="search-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts={posts} />
			<PostAddForm/>
		</div>
	);
};

export default App;
