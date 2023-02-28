import React from "react";
import '../css/Styles.css';
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onOpenCreateTODO = () => {
    setOpenModal(true);
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