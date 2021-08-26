import React from "react";

function Filters(props) {
  return (
    <div className="card  mb-2">
      <div className="card-body ">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Filter by Name</label>
            <input
              onChange={props.handleInputChange}
              name="search"
              value={props.search}
              placeholder="Search for an Employee"
              type="search"
              className="form-control"
              id="search"
            />
          </div>

          <button
            onClick={props.handleFormSubmit}
            className="btn btn-secondary"
          >
            Submit
          </button>

          <div className="btn-group" role="group">
            <button
              onClick={props.handleSortAs}
              type="button"
              className="btn btn-secondary m-3"
            >
              Sort By Age
            </button>

            <button
              onClick={props.handleSortName}
              type="button"
              className="btn btn-secondary m-3"
            >
              Sort By Last Name
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filters;
