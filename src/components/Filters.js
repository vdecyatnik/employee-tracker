import React from "react";




function Filters(props) {
  return (
    <div className="card mb-2">
      <div className="card-body">

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

        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Filters;
