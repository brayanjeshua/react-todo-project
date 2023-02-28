import React from "react";
import { TodoContext } from "../TodoContext";
import '../css/Styles.css';

function TodoCounter() {
    const  { completedTodos: completed, totalTodos: total } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter" >
            You've completed {completed} / {total} tasks
        </h2>
    );
}

export { TodoCounter };