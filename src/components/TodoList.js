import React from "react";
import '../css/Styles.css';

function TodoList(props) {
    const renderFunc = props.render || props.children;

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props?.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}

            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };