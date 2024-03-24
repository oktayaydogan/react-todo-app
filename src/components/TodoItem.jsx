import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const TodoItem = ({ todo, updateHandle, completeHandle, deleteHandle }) => {
	const [editingDetail, setEditingDetail] = useState(false);
	const [newDetail, setNewDetail] = useState(todo.detail);

	const handleDetailChange = (e) => {
		setNewDetail(e.target.value);
	};

	const handleUpdate = () => {
		updateHandle(newDetail);
		setEditingDetail(false);
	};

	return (
		<div className="flex items-center p-4">
			{todo.completed ? (
				<>
					<div className="flex-auto mr-4">
						<div className="font-medium line-through">{todo.title}</div>
						<div className="mt-1 text-slate-700 line-through">
							{todo.detail}
						</div>
					</div>
					<div className="grid gap-2">
						<Button text="Delete" handle={deleteHandle} />
					</div>
				</>
			) : (
				<>
					<div className="flex-auto mr-4">
						<div className="font-medium">{todo.title}</div>
						{editingDetail ? (
							<Input
								value={newDetail}
								onChange={handleDetailChange}
								placeHolder="Detail"
							/>
						) : (
							<div className="mt-1 text-slate-700">{todo.detail}</div>
						)}
					</div>
					<div className="grid gap-2">
						{editingDetail ? (
							<Button text="Save" handle={handleUpdate} />
						) : (
							<>
								<Button text="Update" handle={() => setEditingDetail(true)} />
								<Button text="Complete" handle={() => completeHandle(todo)} />
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default TodoItem;
