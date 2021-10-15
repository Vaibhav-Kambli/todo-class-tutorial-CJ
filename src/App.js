import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const toggleDone = (id) => {
		// A copy of the todos array
		// Replace the todo with the given ID with a copy
		// Update the is_done property of the new copy
		// const newTodos = [...todos];
		// const todo = newTodos.find((todo) => todo.id === id);
		// todo.is_done = !todo.is_done;
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					// return a copy with is_done updated
					return {
						...todo,
						is_done: !todo.is_done
					};
				}
				return todo;
			})
		);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const removeDone = () => {
		setTodos(todos.filter((todo) => !todo.is_done));
	};

	const markDone = () => {
		// mark all todos as done
		setTodos(
			todos.map((todo) => {
				return {
					...todo,
					is_done: true
				};
			})
		);
	};

	return (
		<div className="App">
			<NewTodoForm addTodo={addTodo} />

			<button onClick={removeDone}>Remove done</button>
			<button onClick={markDone}>Mark all done</button>
			<TodoList todos={todos} toggleDone={toggleDone} removeTodo={removeTodo} />
		</div>
	);
};

export default App;
