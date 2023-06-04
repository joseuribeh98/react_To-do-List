import React from "react";

function ToDoCounter({ allTasks, completedTasks }) {
  const fecha = new Date().toLocaleString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const capitalizarPrimeraLetra = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fechaFormateada = capitalizarPrimeraLetra(fecha);

  return (
    <div className="counterContainer">
      <div>
        <span className="counterTitle">To-Do List</span>
      </div>
      <span className="counterDate">{fechaFormateada}</span>
      <h2 className="counterText">
        Has completado <span className="counterEmphasis">{completedTasks}</span> de{" "}
        <span className="counterEmphasis">{allTasks}</span> tareas
      </h2>
    </div>
  );
}

export { ToDoCounter };
