import React from "react";

function ToDoSearch () {
    return(
        <form className="ToDoSearch">
            <label htmlFor="default-search" className="label">Search</label>
            <div className="inputSearchContainer">
                <div className="svgContainer">
                    <svg aria-hidden="true" className="svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
                <input type="search" id="default-search" className="searchInput" placeholder="Hablar con Elon Musk..." required></input>
                <button type="submit" className="btnSearch">Buscar</button>
            </div>
        </form>
    )
}

export { ToDoSearch }