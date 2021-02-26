import React from "react";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
// import API from "./utils/API";
import Filters from "./components/Filters";

class App extends React.Component {
  state = {
    users: [],
    search: ""
  }




  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        {this.state.search}
        <Jumbotron />
        <Filters  handleInputChange = {this.handleInputChange}/>
        <Body users = {this.state.users} />

      </div>
    );
  }
}

export default App;
