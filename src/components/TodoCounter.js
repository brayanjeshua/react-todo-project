import React from "react";
import '../css/Styles.css';

function TodoCounter({ completedTodos: completed, totalTodos: total, loading }) {
    return (
        <h2 className={`TodoCounter ${!!loading ? "TodoCounter--loading" : ""}`} >
            You've completed {completed} / {total} tasks
        </h2>
    );
}

export { TodoCounter };