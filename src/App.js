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
        
        this.setState({ users: res.results });
      })
     
      .catch((err) => console.log(err));
  };


      handleSortName = (event) => {
        const genderSort = this.state.users.sort((a,b) => a.name.last.localeCompare(b.name.last));
          this.setState({
            users: genderSort,
          });



      };
  handleSortAs = (event) => {
    const ageSort = this.state.users.sort((a, b) => a.dob.age - b.dob.age);
    this.setState({
      users: ageSort,
    });

    
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change

    const value = event.target.value;
    const name = event.target.name;
    

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
    
  };

  render() {
    return (
      <div className="container-fluid">
        

        <Jumbotron />

        <Filters
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <CardSort handleSortAs={this.handleSortAs} 
        handleSortName={this.handleSortName}/>
        <Body users={this.state.users}  />
      </div>
    );
  }
}
export default App;
