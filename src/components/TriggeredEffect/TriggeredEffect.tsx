import React from 'react';
import {TriggeredAbility} from "../../model/cards/TriggeredAbility";
import EffectRenderer from "../EffectRenderer/EffectRenderer";
import Icon from "../Icon";


function TriggeredEffect(props: {triggeredAbility: TriggeredAbility}) {
  const triggers = props.triggeredAbility.triggerTypes.map(trigger => <Icon tag={trigger}/>)
  return <>{triggers} <Icon tag={'TRIGGER_ICON'}/> <EffectRenderer effect={props.triggeredAbility.effect}/></>
}

export default TriggeredEffect;
