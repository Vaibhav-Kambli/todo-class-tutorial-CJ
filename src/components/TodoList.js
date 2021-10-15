import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleDone, removeTodo }) => {
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						todo={todo}
						title={todo.title}
						key={todo.id}
						toggleDone={toggleDone}
						removeTodo={removeTodo}
						is_done={todo.is_done}
					/>
					// <li key={id} className={is_done ? "done" : ""}>
					// 	{title}
					// 	<button onClick={() => toggleDone(id)}>Toggle Done</button>
					// 	<button onClick={() => removeTodo(id)}>Remove</button>
					// </li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
