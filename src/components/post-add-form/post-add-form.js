import React from 'react';
import "./post-add-form.scss";

const PostAddForm = (props) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.onAddPost('body')
			}}
			className="bottom-panel d-flex">
			<input
				type="text"
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label"
			/>
			<button type="submit" className="btn btn-outline-secondary">Добавить</button>
		</form>
	);
};

export default PostAddForm;
