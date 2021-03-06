function Body({ users }) {
  console.log("users:", users);
  return (
    // map function of users

    <div className="card">
      <div className="card-body">
        <div className="img-container">
          <ul>
            {users.map((user, index) => (
              <div className="card">
                <div className="img-container">
                  {/* <img alt={props.name} src={props.image} /> */}
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>Name:</strong> {user.name.first} {user.name.last}
                    </li>
                    <li>
                      <strong>Email::</strong> {user.email}
                    </li>
                    <li>
                      <strong>Cell:</strong> {user.cell}
                    </li>
                    <li>
                      <strong>Age:</strong> {user.dob.age}
                    </li>
                    <li>
                      <strong>Gender:</strong> {user.gender}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
