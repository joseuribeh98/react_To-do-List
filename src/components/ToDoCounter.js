import React from "react";

function ToDoCounter() {
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
        Has completado <span className="counterEmphasis">2</span> de{" "}
        <span className="counterEmphasis">3</span> tareas
      </h2>
    </div>
  );
}

export { ToDoCounter };
