import React from 'react';
import Button from "../buttons/buttons";
import "./filter.scss";

const Filter = () => {
	return (
		<div className="filter">
			<Button active name="Все"/>
			<Button name="Понравившийся"/>
		</div>
	);
};

export default Filter;



