import React, {ReactElement} from 'react';
import {Effect, EffectType} from "../../model/cards/Effect";
import Icon from "../Icon";

function EffectRenderer(props: { effect: Effect }) {
    switch (props.effect.effectType) {
        case "BUDGET":
        case "DRAW":
        case "KNOWLEDGE":
        case "CREATIVITY":
        case "ORGANIZATION":
            return multipleIcons(props.effect.effectType, props.effect.value);
        case "PRESTIGE":
            return multipleIcons(props.effect.effectType, props.effect.value);  //FIXME itt a csillag közepébe kéne írni a számot.
        case "DISMISS":
            return multipleIcons(props.effect.effectType, props.effect.value);
        case "DRAW_UNTIL_PERSON":
            break;
        case "BUY_TO_DECK":
            break;
        case "BUY_FROM_TRASH":
            break;
        case "SCOUT_CONTRACTS":
            break;
        case "FIRST_RECRUITMENT_DISCOUNT":
            break;
        case "ENTERTAINMENT_BONUS_SP":
            break;
        case "MANUFACTURING_BONUS_SP":
            break;
        case "HEALTHCARE_BONUS_SP":
            break;
        case "ENTERTAINMENT_SKILL_BONUS":
            break;
        case "MANUFACTURING_SKILL_BONUS":
            break;
        case "HEALTHCARE_SKILL_BONUS":
            break;
        default:
            return <></>
    }
    return <></>
}

function multipleIcons(effectType: EffectType, count: number = 1): ReactElement {
    const element = <Icon tag={effectType}/>;
    if (count <= 3) {
        console.log()
        return <>{new Array(count).fill(element)}</>;
    }
    return <>{element} X {count}</>
}

export default EffectRenderer;
