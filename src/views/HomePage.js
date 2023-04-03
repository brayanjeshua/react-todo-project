import React from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";


function HomePage() {
  const { states, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
  } = states;

  const {
    deleteTodo,
    setOpenModal,
    markAsCompleteTodo,
    setSearchValue,
    addTodo,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <p>ERROR!</p>}
        onLoading={() => <p>Loading.....</p>}
        onEmptyTodos={() => <p>Create your own Todo!</p>}
        onEmptySearchResults={(searchText) => <p>Without results for {searchText}</p>}
        totalTodos={totalTodos}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => markAsCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {!!openModal ? (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      ) : null}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { HomePage } ;
