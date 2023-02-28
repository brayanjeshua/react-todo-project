import React from "react";
import { TodoContext } from "../TodoContext";
import '../css/Styles.css';

function TodoSearch() {
    const {setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
            onChange={onSearchValueChange}
            className="TodoSearch"
            placeholder="Search..."
        />
    );
}

export { TodoSearch };