import React from "react";

function ToDoList(props) {
  return (
    <section className="toDo-list">
      <ul>{props.children}</ul>
    </section>
  );
}

export { ToDoList }
