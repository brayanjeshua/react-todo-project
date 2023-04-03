import React from "react";
import { Checkbox } from "antd";
import { EditOutlined  } from "@ant-design/icons";
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

      <EditOutlined 
        className="Icon Icon-edit"
        onClick={props.onEdit}
      />

    </li>
  );
}

export { TodoItem };