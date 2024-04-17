import React from 'react';
import './App.css';
import {employees} from "./data/employees";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import {generic_cards} from "./data/generic_cards";

function App() {
    return (
        <div className="App">
            {employees.map(e => <EmployeeCard employee={e}/>)}
            <br/>
            {generic_cards.map(e => <EmployeeCard employee={e}/>)}
        </div>
    );
}

export default App;
