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
    } = useLocalStorage('TODOS_V2', []);

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

    const markAsCompleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
        const todoIndex =todos.findIndex(todo => todo.id === id);
        return todos[todoIndex];
    }

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id
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
    }

    const stateUpdaters = {
        getTodo,
        setSearchValue,
        markAsCompleteTodo,
        deleteTodo,
        addTodo,
        editTodo,
    }

    return {
        states, stateUpdaters
    };
}

function newTodoId(todoList) {
    if (todoList.length === 0) {
        return 1;
    }
    
    const idList = todoList.map(todo => todo.id);
    const idMax = Math.max(...idList);
    return idMax + 1;
}

export { useTodos };