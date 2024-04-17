import {Person} from "../model/cards/Person";
import {Hobby} from "../model/cards/Hobby";
import {Item} from "../model/cards/Item";

export const items: Item[] = [
    {
        name: {en: 'Drawing tablet'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 2, knowledge: 0, organization: 0},
        prestige: 0,
    },
    {
        name: {en: 'Mechanical keyboard'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 2, organization: 0},
        prestige: 0,
    },
    {
        name: {en: 'Flipchart'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 2},
        prestige: 0,
    },
    {
        name: {en: 'Top hat'},
        effects: [{effectType: 'BUDGET', value: 1}],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
    },

]
