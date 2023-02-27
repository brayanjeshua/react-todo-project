import React from "react";
import './Styles.css';

function TodoList(props) {
    return (
        <section className="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };