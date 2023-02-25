import React, { useState } from "react";
import FormGroup from "@/components/FormGroup";

export default function CreateQuiz() {
	const initialInputValues = {
		question1: "",
	};

	const submitForm = e => {
		e.preventDefault();

		console.log(e.target);
	};

	const [values, setValues] = useState(initialInputValues);
	const [questionNum, setQuestionNum] = useState(1);

	const handleInputChange = e => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	return (
		<>
			<form method="POST" onSubmit={submitForm}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name"></input>
				</div>
				<div>
					<label htmlFor="duration">Duration</label>
					<input type="number" name="duration" id="duration"></input>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea type="text" name="description" id="description"></textarea>
				</div>
				<button type="button" onClick={() => setQuestionNum(prev => prev + 1)}>
					Add Question
				</button>
				{Array.from({ length: questionNum }, (_, i, ind = i + 1) => (
					<FormGroup
						key={i}
						label={`Question ${ind}`}
						name={`question${ind}`}
						value={values[`question${ind}`] || ""}
						onChange={handleInputChange}
					/>
				))}
				<button type="submit">Save</button>
			</form>
		</>
	);
}
