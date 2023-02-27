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

  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
  if (!localStorageItem) {
    localStorageItem.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => todo.text.toUpperCase().includes(searchValue.toUpperCase()));
  }



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
