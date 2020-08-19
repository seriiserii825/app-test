import React from 'react';
import "./post-list-item.scss";

export default class PostListItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			important: false,
			like: false
		};

		this.onToggleImportant = () => {
			this.setState({
				important: !this.state.important
			});
		}

		this.onToggleLike = () => {
			this.setState({
				like: !this.state.like
			});
		}
	}

	render() {
		let classLists = 'app-list-item d-flex justify-content-space-between';

		if (this.state.important) {
			classLists += ' important';
		}

		if (this.state.like) {
			classLists += ' like';
		}

		return (
			<li className={classLists}>
			<span onClick={this.onToggleImportant} className="app-list-item-label">
				{this.props.label}
			</span>
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={this.onToggleLike} className="btn-star btn-sm">
						<i className="fa fa-star"></i>
					</button>
					<button onClick={this.props.onDelete} className="btn-trash btn-sm">
						<i className="fa fa-trash-o"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</li>
		);
	}
};
