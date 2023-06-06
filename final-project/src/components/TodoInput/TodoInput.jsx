import '../../pages/TodoPage/TodoPage.css'
const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                value={todo}
                placeholder="Добавить задание..."
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button className="add-button" onClick={addTodo}>
                Add
            </button> 
        </div>
    );
};
export default TodoInput;