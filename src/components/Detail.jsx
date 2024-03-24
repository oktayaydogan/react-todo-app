import React from "react";

const Detail = (todo) => {
	const className = todo.completed
		? "line-through flex-auto mr-4"
		: "flex-auto mr-4";

	return (
		<div className={className}>
			<div className="font-medium line-through">{todo.title}</div>
			<div className="mt-1 text-slate-700 line-through">{todo.detail}</div>
		</div>
	);
};

export default Detail;
