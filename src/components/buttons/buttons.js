import React from 'react';
import "./buttons.scss";

const Button = (props) => {
	const activeClass = props.active ? 'active' : '';
	return (
		<button className={`button ${activeClass}`}>{props.name}</button>
	);
};

export default Button;
