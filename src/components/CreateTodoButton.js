import React from "react";
import '../css/Styles.css';
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onOpenCreateTODO = () => {
    setOpenModal((prevState) => !prevState );
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