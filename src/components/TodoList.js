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
				))}
			</ul>
		</div>
	);
};

export default TodoList;
