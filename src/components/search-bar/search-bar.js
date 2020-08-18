import React from 'react';
import AppSearch from "../app-search/app-search";
import Filter from "../filter/filter";
import "./search-bar.scss";

const SearchBar = () => {
	return (
		<div className="search-bar">
			<div className="search-bar__item">
				<AppSearch/>
			</div>
			<div className="search-bar__item">
				<Filter/>
			</div>
		</div>
	);
};

export default SearchBar;
