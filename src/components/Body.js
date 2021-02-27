import {} from "react-dom";

function Body({ users }) {
  console.log("users:", users);
  return (
    // map function of users

    <div className="card">
      <div className="card-body">
        HELLO
        <ul>
          {users
            ? users.map((user, index) => {
                return(<li key={index}>
                  <strong>Name:  {user.name.first}</strong>
                  <strong>Email: {user.email}</strong>
                </li>)
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default Body;
