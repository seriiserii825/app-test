import React from 'react';
import Button from "../buttons/buttons";
import "./filter.scss";

const Filter = (props) => {
	return (
		<div className="filter">
			<button onClick={() => props.onFilter('all')} className="button info">Все</button>
			<button onClick={() => props.onFilter('like')} className="button button-outlined-scoped">Понравившийся</button>
		</div>
	);
};

export default Filter;



