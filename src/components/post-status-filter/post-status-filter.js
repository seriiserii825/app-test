import React from 'react';
import "./post-status-filter.scss";

const PostStatusFilter = (props) => {
	return (
		<div className="btn-group">
			<button onClick={() => props.onFilterSelect('all')} className="btn btn-info">Все</button>
			<button onClick={() => props.onFilterSelect('like')} className="btn btn-success">Понравилось</button>
		</div>
	);
};

export default PostStatusFilter;
