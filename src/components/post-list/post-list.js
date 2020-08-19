import React from 'react';
import "./post-list.scss";
import PostListItem from "../post-list-item/post-list-item";

const PostList = (props) => {
	const elements = props.posts.map((item) => {
		return (
			<PostListItem onDelete={() => props.onDelete(item.id)} label={item.label} important={item.important} key={item.id} like={item.like} />
		)
	});
	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export default PostList;
