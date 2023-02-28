import React from "react";
import '../css/Styles.css';

function TodoCounter({ completedTodos: completed, totalTodos: total }) {
    return (
        <h2 className="TodoCounter" >
            You've completed {completed} / {total} tasks
        </h2>
    );
}

export { TodoCounter };