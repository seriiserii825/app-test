import React from 'react';
import Filter from "../filter/filter";
import "./search-bar.scss";
import "../input/input.scss";

export default class SearchBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.onInput = (e) => {
			this.setState({
				inputValue: e.target.value
			});
			this.props.onSearch(this.state.inputValue);
		}
	}

	render() {
		return (
			<div className="search-bar">
				<div className="search-bar__item">
					<input
						type="text"
						className="input"
						value={this.state.inputValue}
						onChange={this.onInput}
					/>
				</div>
				<div className="search-bar__item">
					<Filter/>
				</div>
			</div>
		);
	}
};
