import React from "react";

function CardSort(props) {
  return (
    <div className="d-flex">
      <div className="card">
        <div className="btn-group" role="group">
          <button
            onClick={props.handleSortAs}
            type="button"
            className="btn btn-secondary m-3"
          >
            Sort By Age
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSort;