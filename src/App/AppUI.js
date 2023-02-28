import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/TodoButton';
import { TodoContext } from "../TodoContext";

function AppUI() {
    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch />

          <TodoContext.Consumer>
            {({ error, loading, searchedTodos, markAsCompleteTodo, deleteTodo })  => (
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
            )}
          </TodoContext.Consumer>
  
          <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUI };