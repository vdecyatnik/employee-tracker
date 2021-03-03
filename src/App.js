import React from "react";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";

import Filters from "./components/Filters";
import API from "./utils/API";

class App extends React.Component {
  state = {
    search: "",
    users: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (employees) => {
    API.getEmployees(employees)
      .then((res) => {
        // console.log("res", res)
        this.setState({ users: res.results });
      })
      // console.log('this.state', this.state)
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change

    const value = event.target.value;
    const name = event.target.name;
    console.log("input", value);

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const result = this.state.users.filter(user => user.name.first.toLowerCase() === this.state.search.toLowerCase())
    this.setState({ users: result })
    // this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div className="container-fluid">
        {this.state.search}
        <Jumbotron />
        <Filters
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Body users={this.state.users}
        search={this.state.search} 
        />
      </div>
    );
  }
}

export default App;
