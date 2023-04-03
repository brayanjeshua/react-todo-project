import React from 'react';
import { TodoForm } from "../components/TodoForm";
import { useTodos } from '../hooks/useTodos';

function CreatePage() {
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;

    return (
        <TodoForm
            label="Type you new Todo"
            submitText="Create"
            submitEvent={(text) => addTodo(text)}
        />
    )
}

export { CreatePage };