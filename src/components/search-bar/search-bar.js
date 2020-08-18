import React from 'react';
import Filter from "../filter/filter";
import "./search-bar.scss";
import Input from "../input/input";

const SearchBar = (props) => {
	return (
		<div className="search-bar">
			<div className="search-bar__item">
				<Input/>
			</div>
			<div className="search-bar__item">
				<Filter onFilter={props.onFilter} />
			</div>
		</div>
	);
};

export default SearchBar;
