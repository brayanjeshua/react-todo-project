import React from "react";
import '../css/Styles.css';


function CreateTodoButton(props) {
  const onAlertButton = (msg) => {
    alert(msg);
  }

    return (
      <button
        className="CreateTodoButton"
        onClick={() => onAlertButton('mensajito')}
      >
        +
      </button>
    );
}

export { CreateTodoButton };