import React from "react";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoTitle } from "./components/ToDoTitle";
import { MainComponent } from "./components/MainComponent";

function App() {
  const initialToDoData = [
    { id: 1, title: "Cortar Cebolla", description: "Picar media cebolla cabezona morada, en cubos, para el pico de gallo", completed: false },
    { id: 2, title: "Hacer un curso en Platzi", description: "Meta: Un curso terminado cada dos dias", completed: false },
    { id: 3, title: "Sacar la basura", description: "Pasa los martes y los jueves; en la noche.", completed: false },
    { id: 4, title: "Ver La Sirenita", description: "Sabado @ 5:30pm", completed: false },
    { id: 5, title: "Ver La Sirenita", description: "Sabado @ 5:30pm", completed: false },
    { id: 6, title: "Ver La Sirenita", description: "Sabado @ 5:30pm", completed: false },
    { id: 7, title: "Ver La Sirenita", description: "Sabado @ 5:30pm", completed: false }
  ];

  const [toDoData, setToDoData] = React.useState(initialToDoData);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedToDos = toDoData.filter((toDo) => {
    const toDoText = toDo.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  const allTasks = searchedToDos.length;
  const completedTasks = searchedToDos.filter(toDo => !!toDo.completed).length;

  return (
    <React.Fragment>
      <ToDoTitle 
        allTasks={allTasks}
        completedTasks={completedTasks}
      />
      <ToDoSearch 
        toDoData={toDoData}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MainComponent
        toDoData={searchedToDos}
        allTasks={allTasks}
        completedTasks={completedTasks}
      />
    </React.Fragment>
  );
}

export default App;
