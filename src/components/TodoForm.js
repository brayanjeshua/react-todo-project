import React from "react";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');
    const navigate = useNavigate();

    const onCancel = () => {
        navigate('/');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
    }

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
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
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export { TodoForm }