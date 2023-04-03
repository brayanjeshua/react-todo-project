import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Empty } from "antd";

function HomePage() {
  const { states, stateUpdaters } = useTodos();
  const navigate = useNavigate();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = states;

  const { deleteTodo, markAsCompleteTodo, setSearchValue } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <p>ERROR!</p>}
        onLoading={() => <p>Loading.....</p>}
        onEmptyTodos={() => <div className="Empty--Box"><Empty/></div>}
        onEmptySearchResults={(searchText) => (
          <div className="Empty--Box">
            <p>Without results for {searchText}</p>
            <Empty />
          </div>
        )}
        totalTodos={totalTodos}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => markAsCompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => {
              navigate("/edit/" + todo.id);
            }}
          />
        )}
      />
      <CreateTodoButton onClick={() => navigate("/new")} />
    </React.Fragment>
  );
}

export { HomePage };
