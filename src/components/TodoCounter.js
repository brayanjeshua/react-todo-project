import React from "react";
import { TodoContext } from "../TodoContext";
import '../css/Styles.css';

function TodoCounter() {
    return (
        <TodoContext.Consumer>
            {( { completedTodos: completed, totalTodos: total }) =>  (
            <h2 className="TodoCounter" >
                You've completed {completed} / {total} tasks
            </h2>
            )}
        </TodoContext.Consumer>
    );
}

export { TodoCounter };