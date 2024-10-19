import React from 'react';
import './App.css';
import { employees } from "./data/employees";
import { backoffice } from "./data/employees";
import { items } from "./data/items";
import EmployeeCard from "./components/newtemplate/EmployeeCard/EmployeeCard";
import ItemCard from './components/newtemplate/ItemCard/ItemCard';
import BackOfficeEmployeeCard from './components/newtemplate/BackOfficeEmployeeCard/BackOfficeEmployeeCard';

// function App() {
//     return (
//         <div className="App">
//             {employees.map(e => <EmployeeCard employee={e}/>)}
//             <br/>
//             {generic_cards.map(e => <EmployeeCard employee={e}/>)}
//         </div>
//     );
// }



const App: React.FC = () => (
    <div className='wrapper'>
        {employees.map(e => <EmployeeCard employee={e} />)}
        {items.map(e => <ItemCard item={e} />)}
        {backoffice.map(e => <BackOfficeEmployeeCard employee={e} />)}
    </div>
);

export default App;
