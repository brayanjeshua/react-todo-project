import React from "react";

import { AppUI } from "./AppUI";

import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la cebolla', completed: false },
//   { text: 'LALALALAL', completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  let parsedTodos;
  if (!localStorageTodos) {
    localStorageTodos.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => todo.text.toUpperCase().includes(searchValue.toUpperCase()));
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
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
