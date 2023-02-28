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
        <form>
            <label>...</label>
            <textarea
                onChange={onWrite}
                placeholder="Cortar la cebolla...."
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    onClick={onSubmit}
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }