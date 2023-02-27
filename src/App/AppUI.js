import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/TodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    markAsCompleteTodo,
    deleteTodo
}) {
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
            {error && <p>ERROR!</p>}
            {loading && <p>Loading.....</p>}
            {(!loading && !searchedTodos.length) && <p>Create your own Todo!</p>}
            
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

export { AppUI };