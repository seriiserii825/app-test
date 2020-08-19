import React from 'react';
import "./post-form.scss";

export default class PostForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.onSubmit = (e) => {
			e.preventDefault();
			if(this.state.inputValue !== ''){
				this.props.onAddPost(this.state.inputValue);
				this.setState({
					inputValue: ''
				});
			}
		};
		this.onUpdateInput = (e) => {
			this.setState({
				inputValue: e.target.value
			});
		};
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="post-form">
				<input
					type="text"
					className="input"
					name="form-input"
					value={this.state.inputValue}
					onChange={this.onUpdateInput}
				/>
				<button className="button">Создать пост</button>
			</form>
		);
	}
};


