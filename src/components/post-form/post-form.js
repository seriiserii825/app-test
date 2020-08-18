import React from 'react';
import "./post-form.scss";
import Button from "../buttons/buttons";
import Input from "../input/input";

const PostForm = () => {
	return (
		<form className="post-form">
			<Input name="form-input" />
			<Button type="submit" name="Добавить новый пост"/>
		</form>
	);
};

export default PostForm;


