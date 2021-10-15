import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState("");

	const formSubmitted = (e) => {
		e.preventDefault();

		addTodo({
			id: Date.now(),
			title: newTodo,
			is_done: false
		});

		setNewTodo("");
	};

	const updateNewTodo = (event) => {
		setNewTodo(event.target.value);
	};

	return (
		<form onSubmit={formSubmitted}>
			<label htmlFor="newTodo">New Todo</label>
			<input onChange={updateNewTodo} id="newTodo" value={newTodo} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
