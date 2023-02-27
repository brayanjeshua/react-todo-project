import React from "react";

import { AppUI } from "./AppUI";

import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la cebolla', completed: false },
//   { text: 'LALALALAL', completed: true },
// ];


/**
 * Custom Hook to Use Local Storage
 * @param {*} itemName name to store in local storage
 * @param {*} initialValue array of initial values
 * @returns [item, saveItem]
 */
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
        if (!localStorageItem) {
          localStorageItem.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem);
        setLoading(false);
      }, 1000)
    } catch (error) {
      console.error(error);
      setError(false);
    }



  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      console.error(error);
      setError(false);
    }

  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  const { 
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

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

  return <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    markAsCompleteTodo={markAsCompleteTodo}
    deleteTodo={deleteTodo}
  ></AppUI>;
}

export default App;
