import React from "react";
import './Styles.css';

function TodoSearch({searchValue, setSearchValue} ) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
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