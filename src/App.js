import React from "react";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
import CardSort from "./components/CardSort";

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

 

  handleSortAs = (event) => {
    const ageSort = this.state.users.sort((a, b) => a.dob.age - b.dob.age);
    this.setState({
      users: ageSort,
    });

    console.log(this.state);
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
    const result = this.state.users.filter(
      (user) =>
        user.name.first.toLowerCase() === this.state.search.toLowerCase()
    );
    this.setState({ users: result });
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
        <CardSort
          handleSortAs={this.handleSortAs}
         
        />
        <Body users={this.state.users} search={this.state.search} />
      </div>
    );
  }
}
export default App;
