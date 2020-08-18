import React from 'react';
import Button from "../buttons/buttons";
import "./filter.scss";

const Filter = (props) => {
	return (
		<div className="filter">
			<Button onFilter={props.onFilter} liked="" active name="Все"/>
			<Button onFilter={props.onFilter} liked="liked" name="Понравившийся"/>
		</div>
	);
};

export default Filter;



