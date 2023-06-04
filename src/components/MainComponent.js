import React from "react";
import { ToDoList }from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoBtn } from "./CreateToDoBtn";

function MainComponent(toDoData, allTasks, completedTasks) {

  return (
    <div className="content">
      <ToDoList>
        {toDoData.toDoData.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            id = {toDo.id}
            title={toDo.title}
            description={toDo.description}
          />
        ))}
      </ToDoList>
      <CreateToDoBtn />
    </div>
  );
}

export { MainComponent}