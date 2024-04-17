import {JobType} from "./JobType";
import {Industry} from "./Industry";
import TranslatedString from "../TranslatedString";
import {Effect} from "../cards/Effect";

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
    type: JobType;
    completionEffects?: Effect[];
    permanentEffects?: Effect[];
}
