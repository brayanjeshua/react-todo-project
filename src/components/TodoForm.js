import React from "react";

function TodoForm({ addTodo, setOpenModal } ) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

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