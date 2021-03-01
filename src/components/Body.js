

function Body({ users }) {
  console.log("users:", users);
  return (
    // map function of users

    <div className="card">
      <div className="card-body">
       
        <ul>
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
        </ul>
      </div>
    </div>
  );
}

export default Body;
