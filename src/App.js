// import './App.css'
import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoTitle } from "./components/ToDoTitle";
import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <React.Fragment>
      <ToDoTitle />
      <ToDoCounter/>
      <ToDoSearch />
      <MainComponent /> 
    </React.Fragment>
  );
}

export default App;
