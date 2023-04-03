import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoForm } from "../components/TodoForm";
import { useTodos } from '../hooks/useTodos';

function EditPage() {
    const { states, stateUpdaters } = useTodos();
    const { getTodo, editTodo } = stateUpdaters;
    const { loading } = states;
    const params = useParams();
    const id = Number(params?.id);

    if (loading) {
        return <p>Loading....</p>
    } else {
        const todoInfo = getTodo(id);
        return (
            <TodoForm
                label="Edit your todo"
                defaultTodoText={todoInfo.text}
                submitText="Edit"
                submitEvent={(newText) => editTodo(id, newText)}
            />
        )
    }
}

export { EditPage };