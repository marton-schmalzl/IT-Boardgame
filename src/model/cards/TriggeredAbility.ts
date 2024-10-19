import { Industry } from "../contracts/Industry";
import { Stats } from "../Stats";
import TranslatedString from "../TranslatedString";
import { Effect } from "./Effect";
import { Hobby } from "./Hobby";

export class TaskCompletion {
        constructor(
            public minStats?: Stats,
            public teamMateComp?: { count?: number, compare?: "MIN" | "MAX" | "EXACT", allJunior?: boolean, allSenior?: boolean}
        ) { }
}
export class TaskAssignment extends TaskCompletion {}
export class FeatureCompletion extends TaskCompletion { constructor(public industry?: Industry, minStats?: Stats) { super(minStats) } }
export class FeatureAssignment extends FeatureCompletion { }
export class TechCompletion extends TaskCompletion { constructor(public openSource?: boolean, minStats?: Stats) { super(minStats) } }
export class TechAssignment extends TechCompletion { }

export type TriggerTypes = Hobby | "NONE" | "ON_PLAY" | "DESTROY" | "DISMISS" | "DISCARD" | "ALL_JUNIOR_TEAMMATES"
    |TaskAssignment| FeatureCompletion | FeatureAssignment | TechCompletion | TechAssignment;
export interface TriggeredAbility {
    triggerTypes: TriggerTypes[];
    description?: TranslatedString;
    effect: Effect;
    multiUse?: boolean
}
