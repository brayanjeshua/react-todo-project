import React from "react";
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/TodoButton'

// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Llorar con la cebolla', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter / >
      <TodoSearch / >
        <TodoList>
          {todos.map(todo => 
           <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
             />
          )} 
        </TodoList>

        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
