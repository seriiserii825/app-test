import React from 'react';
import "./post-list-item.scss";

const PostListItem = (props) => {
	let classLists = 'app-list-item d-flex justify-content-space-between';

	if (props.important) {
		classLists += ' important';
	}

	if (props.like) {
		classLists += ' like';
	}

	return (
		<li className={classLists}>
			<span onClick={props.onToggleImportant} className="app-list-item-label">
				{props.label}
			</span>
			<div className="d-flex justify-content-center align-items-center">
				<button onClick={props.onToggleLike} className="btn-star btn-sm">
					<i className="fa fa-star"></i>
				</button>
				<button onClick={props.onDelete} className="btn-trash btn-sm">
					<i className="fa fa-trash-o"></i>
				</button>
				<i className="fa fa-heart"></i>
			</div>
		</li>
	);
};
export default PostListItem;