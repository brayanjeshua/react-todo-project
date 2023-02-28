import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";


function App() {
  const {
    error,
    loading,
    searchedTodos,
    markAsCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <p>ERROR!</p>}
        {loading && <p>Loading.....</p>}
        {(!loading && !searchedTodos.length) && <p>Create your own Todo!</p>}

        {searchedTodos.map(todo =>
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => markAsCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal ? (
        <Modal>
          <TodoForm
            addTodo={addTodo}
          />
        </Modal>
      ) : null}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
