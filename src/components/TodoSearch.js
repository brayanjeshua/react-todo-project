import React from "react";
import { TodoContext } from "../TodoContext";
import '../css/Styles.css';

function TodoSearch() {
    return (
        <TodoContext.Consumer>
            {( {setSearchValue} ) => {
            const onSearchValueChange = (event) => {
                setSearchValue(event.target.value);
            }
            return (
                <input 
                    onChange={onSearchValueChange}
                    className="TodoSearch"
                    placeholder="Search..."
                />
            )
            }}
        </TodoContext.Consumer>
    );
}

export { TodoSearch };