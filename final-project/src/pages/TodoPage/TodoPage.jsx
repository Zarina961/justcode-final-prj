
import { useState } from "react";
import TodoInput from '../../components/TodoInput/TodoInput'
import TodoList from '../../components/TodoList/TodoList'
import './TodoPage.css'

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const[todo, setTodo] = useState("");
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="Todo">
      <h1>Список дел</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
};
export default TodoPage;