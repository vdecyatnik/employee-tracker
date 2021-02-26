import {  } from "react-dom";

function Body(props) {
  return (
    // map function of users
    <div className="card">
      <div className="card-body">
        <ul>
          <li>
            <strong>Name:</strong>
           
            {props.name}
            <li>

            <strong>Title:</strong> 
            {props.title}
            </li>
            <li>
              <strong>Email:</strong>
              {props.email}
            </li>
            <li>
              <strong>Cell:</strong>
              {props.cell}
            </li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
