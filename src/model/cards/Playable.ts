import TranslatedString from "../TranslatedString";
import {Effect} from "./Effect";

export interface Playable {
    name: TranslatedString;
    text?: TranslatedString;
    flavorText?: TranslatedString;
    effects: Effect[];
    cost: number;

    skills: {
        knowledge?: number;
        creativity?: number;
        organization?: number;
    }

    prestige?: number;
    dismissible?: boolean;
    dismissEffects?: Effect[];

}
