import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Custom hook to handle the attributes and properties
 * @returns 
 */
function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length > 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => todo.text.toUpperCase().includes(searchValue.toUpperCase()));
    }

    React.useEffect(() => {
        console.log('totalTodos has been changed');
    }, [totalTodos]);

    const markAsCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos);
    }


    const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
    }

    const stateUpdaters = {
        setSearchValue,
        markAsCompleteTodo,
        deleteTodo,
        setOpenModal,
        addTodo,
    }

    return {
        states, stateUpdaters
    };
}

export { useTodos };