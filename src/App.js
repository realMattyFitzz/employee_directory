import React, { Component } from 'react';
import EmployeeList from "./EmployeeList";
import SearchBox from "./SearchBox";
import "../src/App.css";



class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     employees: [
       {name: "Luffy", position: "Captian"},
       {name: "Roronoa Zoro", position: "Swordsman"},
       {name: "Nami", position: "Navigator"},
       {name: "Sanji", position: "Chef"},
       {name: "Usopp", position: "Lookout"}
     ],
     searchEmployees: ''
   }
 }

 handleInput = (e) => {
//  console.log(e.target.value);
 this.setState({searchEmployees: e.target.value})
 }


 render () {
  let filteredEmployees = this.state.employees.filter((employee) => {
    return employee.position.toLowerCase().includes(this.state.searchEmployees.toLowerCase())
  })

   return (
     <div className="App">
       <h1>Employees</h1>
       <p>Search Employees by position</p>
       <SearchBox handleInput={this.handleInput}/>
       <EmployeeList filteredEmployees={filteredEmployees}/>
     </div>
   )
 }


}


export default App;
