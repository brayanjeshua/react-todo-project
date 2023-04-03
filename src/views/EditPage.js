import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function EditPage() {
    const location = useLocation();
    const { states, stateUpdaters } = useTodos();
    const { getTodo, editTodo } = stateUpdaters;
    const { loading } = states;
    const params = useParams();
    const id = Number(params?.id);

    let todoInfo = [];
    if (location?.state?.todo) {
        todoInfo = location.state.todo;
    } else if (loading) {
        return <p>Loading....</p>;
    } else {
        todoInfo = getTodo(id);
    }

    return (
        <TodoForm
            label="Edit your todo"
            defaultTodoText={todoInfo.text}
            submitText="Edit"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    );
}

export { EditPage };
