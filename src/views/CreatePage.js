import React from 'react';
import { TodoForm } from "../components/TodoForm";

function CreatePage() {
    return (
        <TodoForm
            label="Type you new Todo"
            submitText="Create"
            submitEvent={() => { console.log('Call to addTodo')}}
        />
    )
}

export { CreatePage };