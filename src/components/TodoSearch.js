import React from "react";
import '../css/Styles.css';

function TodoSearch({ setSearchValue, loading}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            onChange={onSearchValueChange}
            className="TodoSearch"
            placeholder="Search..."
            disabled={loading}
        />
    );
}

export { TodoSearch };