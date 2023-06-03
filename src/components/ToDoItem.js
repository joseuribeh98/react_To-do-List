import React from "react";
import { useState } from "react";

function ToDoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <li className="toDoContainer">
      <div className="inputItemContainer">
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="inputItem"
          onChange={handleInputChange}
          style={isChecked ? { opacity: 0.3 } : {}}
        />
      </div>
      <div className="title-desc_div">
        <label
          for="helper-checkbox"
          className="titleItem"
          style={
            isChecked ? { textDecoration: "line-through", opacity: 0.3 } : {}
          }
        >
          {props.title}
        </label>
        <p
          id="helper-checkbox-text"
          className="descItem"
          style={
            isChecked ? { textDecoration: "line-through", opacity: 0.3 } : {}
          }
        >
          {props.description}
        </p>
      </div>
    </li>
  );
}

export { ToDoItem };
