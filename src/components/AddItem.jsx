import React from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

const AddItem = ({ addHandle }) => {
	const [title, setTitle] = React.useState("");
	const [detail, setDetail] = React.useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDetailChange = (e) => {
		setDetail(e.target.value);
	};

	const handleAdd = () => {
		addHandle({ title, detail });
		setTitle("");
		setDetail("");
	};

	return (
		<div className="flex items-center p-4">
			<div className="flex-auto">
				<div className="font-medium">New Todo</div>

				<Input value={title} onChange={handleTitleChange} placeHolder="Title" />
				<Textarea
					value={detail}
					onChange={handleDetailChange}
					placeHolder="Detail"
				/>
				<Button text="Add" handle={() => handleAdd()} />
			</div>
		</div>
	);
};

export default AddItem;
