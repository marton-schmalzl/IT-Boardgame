import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faBook,
  faDiceD20,
  faLightbulb,
  faMoneyBill,
  faMountainSun,
  faMusic,
  faSitemap,
  faStar, faTrash
} from "@fortawesome/free-solid-svg-icons";
import {EffectType} from "../model/cards/Effect";
import {Hobby} from "../model/cards/Hobby";
import {TriggerTypes} from "../model/cards/TriggeredAbility";

type IconTags = EffectType|Hobby|TriggerTypes|'TRIGGER_ICON';
function Icon(props: {tag: IconTags }) {
  return <svg height={'1.2em'} width={'1.2em'}>
    <svg x={'0.1em'} y={'0.1em'} height={'1em'} width={'1em'}>
      {getIcon(props)}
    </svg>
  </svg>
}
function getIcon(props: {tag: IconTags}) {
  switch (props.tag) {
    case "BUDGET":
      return <FontAwesomeIcon icon={faMoneyBill}/>;
    case "KNOWLEDGE":
      return <FontAwesomeIcon icon={faBook}/>;
    case "CREATIVITY":
      return <FontAwesomeIcon icon={faLightbulb}/>;
    case "ORGANIZATION":
      return <FontAwesomeIcon icon={faSitemap}/>;
    case "PRESTIGE":
      return <FontAwesomeIcon icon={faStar}/>;
    case "DISMISS":
      return <FontAwesomeIcon icon={faTrash}/>;
    case "DRAW":
      break;
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

    case Hobby.OUTDOOR:
      return <FontAwesomeIcon icon={faMountainSun}/>;
    case Hobby.MUSIC:
      return <FontAwesomeIcon icon={faMusic}/>;
    case Hobby.BOARDGAMES:
      return <FontAwesomeIcon icon={faDiceD20}/>;
    case Hobby.ALL:
      break;


  }
  return <></>
}

export default Icon;
