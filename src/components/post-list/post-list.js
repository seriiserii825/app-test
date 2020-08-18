import React from 'react';
import "./post-list.scss";
import PostListItem from "../post-list-item/post-list-item";

const PostList = (props) => {
	const posts = props.posts.map((item) => {
		return (
			<PostListItem title={item.title} liked={item.liked} key={item.id}/>
		);
	});
	return (
		<ul className="post-list">
			{posts}
		</ul>
	);
};

export default PostList;
