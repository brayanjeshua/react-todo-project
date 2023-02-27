import React from "react";
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/TodoButton'

// import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Llorar con la cebolla', completed: false },
  { text: 'LALALALAL', completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

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
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      / >
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        <TodoList>
          {searchedTodos.map(todo => 
           <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() =>markAsCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
             />
          )} 
        </TodoList>

        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
