
import {Industry} from "./Industry";
import TranslatedString from "../TranslatedString";
import {Effect} from "../cards/Effect";
import { TriggeredAbility } from "../cards/TriggeredAbility";

export interface Contract {
    name: TranslatedString,
    text?: TranslatedString,
    flavorText?: TranslatedString,
    requiredSkills: {
        knowledge: number;
        creativity: number;
        organization: number;
    }
    storyPoints: number;
    sector: Industry;
    completionEffects?: Effect[];
}

export interface Technology extends Contract {
    openSourcePrestige?: number;
    topEffects?: TriggeredAbility[];
    topDescripition?: TranslatedString;
    bottomeEffects?: TriggeredAbility[];
    bottomDescripition?: TranslatedString;
}