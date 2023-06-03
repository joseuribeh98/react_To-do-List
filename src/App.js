// import './App.css'
import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoBtn } from "./components/CreateToDoBtn";

const toDoData = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Hacer un curso en Platzi", completed: false },
  { text: "Sacar la basura", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDoData.map(toDo => (
          <ToDoItem key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>
      <CreateToDoBtn />
    </React.Fragment>
  );
}

export default App;
