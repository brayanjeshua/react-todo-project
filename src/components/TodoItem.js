import React from "react";
import { Checkbox } from "antd";
import '../css/Styles.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">

      <Checkbox
        className="Icon-check--active"
        checked={props.completed}
        onClick={props.onComplete}
      ></Checkbox>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };