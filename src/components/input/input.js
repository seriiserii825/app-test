import React from 'react';
import "./input.scss";

const Input = (props) => {
	const type = props.type ? props.type : 'text';
	const name = props.name ? props.name : 'input';

	return (
		<input className="input" type={type} name={name}/>
	);
};

export default Input;
