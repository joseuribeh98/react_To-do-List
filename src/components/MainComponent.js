import React from "react";
import { ToDoList }from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoBtn } from "./CreateToDoBtn";

function MainComponent() {
  const toDoData = [
    { id: 1, title: "Cortar Cebolla", description: "Picar media cebolla cabezona morada, en cubos, para el pico de gallo", completed: false },
    { id: 2, title: "Hacer un curso en Platzi", description: "Meta: Un curso terminado cada dos dias", completed: false },
    { id: 3, title: "Sacar la basura", description: "Pasa los martes y los jueves; en la noche.", completed: false },
  ];

  return (
    <div className="content">
      <ToDoList>
        {toDoData.map((toDo) => (
          <ToDoItem
            key={toDo.id}
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