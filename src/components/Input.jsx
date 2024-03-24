import React from "react";

const Input = ({ value, onChange, placeHolder }) => {
	return (
		<input
			type="text"
			className="w-full py-2 mt-1 text-slate-700 border-b border-slate-300 focus:outline-none focus:border-slate-500"
			value={value}
			onChange={onChange}
			placeholder={placeHolder}
		/>
	);
};

export default Input;
