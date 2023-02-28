import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
        console.log(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Type your new Todo...</label>
            <textarea
                onChange={onWrite}
                placeholder="Cut the onions...."
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }