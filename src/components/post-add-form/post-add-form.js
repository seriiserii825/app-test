import React from 'react';
import "./post-add-form.scss";

export default class PostAddForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.onValueChange = (e) => {
			this.setState({
				text: e.target.value
			});
		}
		this.onSubmit = (e) => {
			e.preventDefault();
			if(this.state.text !== ''){
				this.props.onAddPost(this.state.text);
				this.setState({
					text: ''
				});
			}
		}
	}

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				className="bottom-panel d-flex">
				<input
					type="text"
					placeholder="О чем вы думаете сейчас?"
					className="form-control new-post-label"
					onChange={this.onValueChange}
					value={this.state.text}
				/>
				<button type="submit" className="btn btn-outline-secondary">Добавить</button>
			</form>
		);
	}
};
