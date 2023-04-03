import React from "react";
import '../css/Styles.css';

function CreateTodoButton({ onClick }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClick()}
    >
      +
    </button>
  );
}

export { CreateTodoButton };