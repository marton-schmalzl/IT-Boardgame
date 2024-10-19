import { Stats } from "../Stats";


export class StatBonus implements Stats {constructor(public knowledge?: number, public creativity?: number, public organization?: number){}}
export interface Effect {
    effectType: EffectType;
    mandatory?: boolean;
    value?: number;
}
export type EffectType = 'NONE' | 'BUDGET' | 'KNOWLEDGE' | 'CREATIVITY' | 'ORGANIZATION' | 'PRESTIGE'| 'DISMISS'
    | 'DISCARD' | 'DESTROY_ASSIGNED_ITEM' | 'DESTROY' | 'PURGE_CONTRACT' | 'PURGE_PERSON' | 'PURGE_ITEM' | 'DRAW'| 'DRAW_UNTIL_PERSON'
    | 'BUY_TO_DECK' | 'BUY_FROM_TRASH' | 'SCOUT_CONTRACTS'| 'SCOUT_EMPLOYEES' |'FIRST_RECRUITMENT_DISCOUNT'
    | 'STORY_POINT' | 'PRESTIGE_POINT' | 'TRAINING' | 'SUPPORT' | 'DISMISS_SELF' | 'BACK_TO_TOP_OF_DECK'
    | StatBonus;
