import React from 'react';
import "./post-list-item.scss";

const PostListItem = (props) => {
	let postClass = '';
	if(props.liked){
		postClass += ' liked';
	}
	return (
		<li
			className={`post-list-item ${postClass}`}
			key={props.id}
		>
			<span onClick={props.onToggleLike} className="post-list-item__text">{props.title}</span>
			<div className="post-list-item__icons">
				<span onClick={props.onDelete} className="post-list-item__delete">
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</span>
				<span className="post-list-item__heart">
					<i className="fa fa-heart" aria-hidden="true"></i>
				</span>
			</div>
		</li>
	);
};

export default PostListItem;
