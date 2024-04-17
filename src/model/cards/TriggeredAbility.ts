import TranslatedString from "../TranslatedString";
import {Effect} from "./Effect";
import {Hobby} from "./Hobby";

export type TriggerTypes = Hobby;
export interface TriggeredAbility {
    triggerTypes: TriggerTypes[];
    description?: TranslatedString;
    effect: Effect;
}
