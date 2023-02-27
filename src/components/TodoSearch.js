import React from "react";
import './Styles.css';

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <input 
            onChange={onSearchValueChange}
            className="TodoSearch"
            placeholder="Cebolla"
        />
    );
}

export { TodoSearch };