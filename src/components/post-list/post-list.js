import React from 'react';
import "./post-list.scss";
import PostListItem from "../post-list-item/post-list-item";

const PostList = (props) => {
	const posts = props.posts.map((item) => {
		return (
			<PostListItem
				onDelete={() => props.onDelete(item.id)}
				title={item.title}
				liked={item.liked}
				key={item.id}
				onToggleLike={() => props.onToggleLike(item.id)}
			/>
		);
	});
	return (
		<ul className="post-list">
			{posts}
		</ul>
	);
};

export default PostList;
