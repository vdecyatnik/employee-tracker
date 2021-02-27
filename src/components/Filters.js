import React from "react";




function Filters(props) {
  return (
    <div className="card">
      <div className="card-body"></div>

      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Search for Employees</label>
          <input
            onChange={props.handleInputChange}
            name="search"
            value={props.value}
            placeholder="Search for an Employee"
            type="text"
            className="form-control"
            id="search"
          />
        </div>

        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Filters;
