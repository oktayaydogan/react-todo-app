// Todo Item Component
import React from "react";

const Button = ({ text, handle }) => {
	return (
		<div
			className="text-center cursor-pointer pointer-events-auto flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
			onClick={handle}
		>
			{text}
		</div>
	);
};

export default Button;
