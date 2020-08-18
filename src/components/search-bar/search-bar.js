import React from 'react';
import Filter from "../filter/filter";
import "./search-bar.scss";
import Input from "../input/input";

const SearchBar = () => {
	return (
		<div className="search-bar">
			<div className="search-bar__item">
				<Input/>
			</div>
			<div className="search-bar__item">
				<Filter/>
			</div>
		</div>
	);
};

export default SearchBar;
