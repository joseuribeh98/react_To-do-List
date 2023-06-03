import React from "react";
import { ToDoCounter } from "./ToDoCounter";


function ToDoTitle() {
    return (
    <div className="titleContainer">
    <div className="title">
    <span>GET</span>
    <span><span className="lightGrayTitle">SH</span>IT</span>
    <span>DONE.</span>
    </div>
    <ToDoCounter />
    <div className="subtitleContainer">
      <img className="profileImg" src="https://www.gravatar.com/avatar/33caf64ec43ef741ba2f95dfe86f1dc2"></img>
      <span className="subtitle"> Jose Uribe</span>
    </div>
    </div>
)
}

export { ToDoTitle };
