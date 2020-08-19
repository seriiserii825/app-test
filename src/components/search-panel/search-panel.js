import React from 'react';
import "./search-panel.scss";

export default class SearchPanel extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
		this.updateInputValue = (e) => {
			this.setState({
				inputValue: e.target.value
			});
			this.props.onUpdatePosts(this.state.inputValue);
		}
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="Поиск по записям"
				onChange={this.updateInputValue}
				value={this.state.inputValue}
			/>
		);
	}
};
