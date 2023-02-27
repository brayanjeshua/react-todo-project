import React from "react";
import '../css/Styles.css';

function TodoCounter({completed, total }) {
    return (
        <h2 className="TodoCounter" >
            Has completado {completed} de {total} Todos
        </h2>
    );
}

export { TodoCounter };