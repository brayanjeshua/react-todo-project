import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const { error, loading, searchedTodos, markAsCompleteTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
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
          <TodoForm />
        </Modal>
      ) : null}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };