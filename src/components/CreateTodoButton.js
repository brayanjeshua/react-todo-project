import React from "react";
import '../css/Styles.css';

function CreateTodoButton({ setOpenModal }) {

  const onOpenCreateTODO = () => {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onOpenCreateTODO()}
    >
      +
    </button>
  );
}

export { CreateTodoButton };