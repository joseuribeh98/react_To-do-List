import React from "react";

function ToDoItem(props) {
    return(
        <li className="toDoContainer">
                <div className="inputItemContainer">
                    <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                </div>
                <div className="title-desc_div">
                    <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">{props.title}</label>
                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{props.description}</p>
                </div>
        </li>
    )
}

export { ToDoItem}