import {Playable} from "./Playable";
import {TriggeredAbility} from "./TriggeredAbility";
import {Hobby} from "./Hobby";

export interface Person extends Playable {
    hobby?: Hobby;
    triggeredAbilities: TriggeredAbility[];
}
