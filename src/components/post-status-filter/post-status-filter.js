import React from 'react';
import "./post-status-filter.scss";

const PostStatusFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-info">Все</button>
			<button className="btn btn-success">Понравилось</button>
		</div>
	);
};

export default PostStatusFilter;
