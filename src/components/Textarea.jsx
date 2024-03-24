import React from "react";

const Textarea = ({ value, onChange, placeHolder }) => {
	return (
		<textarea
			className="w-full mb-2 py-2 mt-1 text-slate-700 border-b border-slate-300 focus:outline-none focus:border-slate-500 resize-none"
			value={value}
			onChange={onChange}
			placeholder={placeHolder}
		/>
	);
};

export default Textarea;
