import React from "react";

const TodoItem = ({ todo, title, id, toggleDone, removeTodo, is_done }) => {
	return (
		<div>
			<li key={id} className={is_done ? "done" : ""}>
				{title}
				<button onClick={() => toggleDone(id)}>Toggle Done</button>
				<button onClick={() => removeTodo(id)}>Remove</button>
			</li>
		</div>
	);
};

export default TodoItem;
