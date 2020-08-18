import React from 'react';
import "./buttons.scss";

const Button = (props) => {
	const activeClass = props.active ? 'active' : '';
	const buttonType = props.type ? props.type : 'button';
	return (
		<button type={buttonType} className={`button ${activeClass}`}>{props.name}</button>
	);
};

export default Button;
