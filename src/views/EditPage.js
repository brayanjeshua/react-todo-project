import React from 'react';
import { TodoForm } from "../components/TodoForm";

function EditPage() {
    return (
        <TodoForm
            label="Edit your todo"
            submitText="Edit"
            submitEvent={() => { console.log('Call to editTodo')}}
        />
    )
}

export { EditPage };