import React from "react";

export default function FormGroup(props, { innerRef }) {
	const {
		id,
		label,
		type = "text",
		name,
		value,
		onChange,
		className,
		errorRequired,
		maxLength,
		charactercount,
	} = props;

	return (
		<div>
			<div>
				<label htmlFor={id}>{label}</label>
				<input
					id={id}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}
