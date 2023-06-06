import '../../pages/TodoPage/TodoPage.css'
const TodoList =({ list, remove }) => {
    return (
            <ul className="todo-list">
                {list.map((entry) => (
                    <div className="todo">
                        <li>{entry}</li>
                        <button className="delete-button" onClick={()=> {
                            remove(entry);
                        }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
    );
};
export default TodoList;