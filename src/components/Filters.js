function Filters( {handleInputChange}) {
  return (
    <div className="card">
      <div className="card-body"></div>


      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Search for Employees</label>
    <input type="text" className="form-control" id="employeename" aria-describedby="search"/>
   
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      
      </div>
   
  );
}

export default Filters;
