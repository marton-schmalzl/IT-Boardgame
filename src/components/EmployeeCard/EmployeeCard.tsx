import React from 'react';

import './EmployeeCard.css';
import {Person} from "../../model/cards/Person";
import tr from "../translate";
import EffectRenderer from "../EffectRenderer/EffectRenderer";
import TriggeredEffect from "../TriggeredEffect/TriggeredEffect";

function EmployeeCard(props: { employee: Person }) {
    return <div className={'employeeCard'}>
        <>
            <span>{tr(props.employee.name)}</span>
            {props.employee.effects?.map(effect =>
                <div><EffectRenderer effect={effect}/></div>
            )}
            {props.employee.triggeredAbilities.map(ability =>
                <div><TriggeredEffect triggeredAbility={ability} /></div>
            )}
        </>
    </div>
}

export default EmployeeCard;
