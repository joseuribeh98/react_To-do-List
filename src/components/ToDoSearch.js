import React from "react";

function ToDoSearch({ toDoData, searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  let filteredToDoData = toDoData;

  if (searchValue.length > 0) {
    filteredToDoData = toDoData.filter((toDo) => {
      const toDoText = toDo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  return (
    <form className="ToDoSearch">
      <label htmlFor="default-search" className="label">
        Search
      </label>
      <div className="inputSearchContainer">
        <div className="svgContainer">
          <svg
            aria-hidden="true"
            className="svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          onChange={onSearchValueChange}
          value={searchValue}
          type="search"
          id="default-search"
          className="searchInput"
          placeholder="Hablar con Elon Musk..."
          required
        />
      </div>
    </form>
  );
}

export { ToDoSearch };
