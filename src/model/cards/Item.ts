import { Stats } from "../Stats";
import {Playable} from "./Playable";

export interface Item extends Playable {
    skills: Stats
}
