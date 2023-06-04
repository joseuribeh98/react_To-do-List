import React from "react";

function CreateToDoBtn() {
  const addItem = () => {
    alert("Add Item");
  };

  return (
    <div className="btnContainer">
      <button className="btnAdd" onClick={addItem}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="Complete">
            <g id="add-2" data-name="add">
              <g>
                <line
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  x2="12"
                  y1="19"
                  y2="5"
                />
                <line
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export { CreateToDoBtn };
