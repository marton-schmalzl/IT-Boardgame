import React from 'react';
import './App.css';
import { employees } from "./data/employees";
import { backoffice } from "./data/employees";
import { items } from "./data/items";
import { tecnical_contracts } from "./data/tecnical_contracts";
import EmployeeCard from "./components/newtemplate/EmployeeCard/EmployeeCard";
import ItemCard from './components/newtemplate/ItemCard/ItemCard';
import BackOfficeEmployeeCard from './components/newtemplate/BackOfficeEmployeeCard/BackOfficeEmployeeCard';
import TechnologyCard from './components/newtemplate/TechnologyCard/TechnologyCard';
import { functional_contracts } from './data/functional_contracts';
import FeatureCard from './components/newtemplate/FeatureCard/FeatureCard';

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
        <section>
            {employees.map(e => <EmployeeCard employee={e} />)}
        </section>
        <section>
            {backoffice.map(e => <BackOfficeEmployeeCard employee={e} />)}
        </section>
        <section>
            {items.map(e => <ItemCard item={e} />)}
        </section>
        <section>
            {tecnical_contracts.map(e => <TechnologyCard technology={e} />)}
        </section>
        <section>
            {functional_contracts.map(e => <FeatureCard feature={e} />)}
        </section>
    </div>
);

export default App;
