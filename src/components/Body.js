function Body({ users }) {
  console.log("users:", users);
  return (
    // map function of users

    <div className="card">
      <div className="card-body">
        {users
        
        
        .map((user, index) => (
          <div className="card">
            <div className="img-container">
              {/* <img alt={props.name} src={props.image} /> */}
            </div>
            <div className="content">
              <ul key={index}>
                <li>
                  <strong>Name:</strong> {user.name.first} {user.name.last}
                </li>
                <li>
                  <strong>Email:</strong> {user.email}
                </li>
                <li>
                  <strong>Phone:</strong> {user.phone}
                </li>
              </ul>
            </div>
          </div>

          // <ul key={index}>
          //   <li>
          //     <strong>
          //       Name: {user.name.first}{" "}
          //       {user.name.last}
          //     </strong>
          //   </li>
          //   <li>
          //     <strong>Email: {user.email}</strong>
          //   </li>
          //   <li>

          //     <strong>Phone: {user.phone}</strong>
          //   </li>
          //   <li>
          //     <strong>Cell: {user.cell}</strong>
          //   </li>
          // </ul>
        ))}

        {/* <ul>
          {users? users.map((user, index) => {
                return(<li key={index}>
                  <ul>

                  <li><strong>Name:  {user.name.first}{user.name.last}</strong></li>
                  <li><strong>Email: {user.email}</strong></li>
                 <li> <strong>Phone: {user.phone}</strong></li>
                  <li><strong>Cell: {user.cell}</strong></li>
                  </ul>
                </li>)
              })
            : ""}
        </ul> */}
      </div>
    </div>
  );
}

export default Body;
