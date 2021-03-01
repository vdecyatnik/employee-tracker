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
            value={props.value}
            placeholder="Search for an Employee"
            type="text"
            className="form-control"
            id="nameFilter"
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
