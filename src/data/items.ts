import { Stats } from "fs";
import { Item } from "../model/cards/Item";
import { TaskCompletion, TechAssignment } from "../model/cards/TriggeredAbility";
import { StatBonus } from "../model/cards/Effect";

export const items: Item[] = [
    {
        name: {en: 'Drawing tablet'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 2, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "tablet.jpg"
    },
    {
        name: {en: 'Mechanical keyboard'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 2, organization: 0},
        prestige: 0,
        photoSrc: "mechanical_keyboard.jpg"
    },
    {
        name: {en: 'Flipchart'},
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 2},
        prestige: 0,
        photoSrc: "flipchart.jpg"
    },
    {
        name: {en: 'Top hat'},
        effects: [{effectType: 'BUDGET', value: 1}],
        text: {en:"➕💲"},
        flavorText: {},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "tophat.jpg"
    },
    {
        name: {en: 'Programming socks'},
        effects: [{effectType: 'BUDGET', value: 1}],
        triggeredAbilities: [{
            triggerTypes: [new TechAssignment(true)],
            effect: {effectType: new StatBonus(4, 0, 0)}
        }],
        text: {en: "➕⚙️⚙️⚙️⚙️ when assigned to an Open Source Assignment"},
        flavorText: {en: "Works particularly well on rust developers"},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "programming_socks.jpg"
    },
    {
        name: {en: 'Energy drinnk'},
        effects: [{effectType: 'BUDGET', value: 1}],
        triggeredAbilities: [{
            triggerTypes: [new TaskCompletion()],
            effect: {effectType: 'BACK_TO_TOP_OF_DECK'}
        }],
        text: {en: "Instead of discarding the employee this item is assign to, put them back on the top of your deck"},
        flavorText: {en: "Gives you wiiings"},
        cost: 1,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "energy_drink.jpg"
    },
    {
        name: {en: 'Investment portfolio'},
        effects: [{effectType: 'BUDGET', value: 1}],
        triggeredAbilities: [{triggerTypes:['DESTROY'], effect: {effectType: 'BUDGET', value: 3}}],
        text: {en:"➕💲 Destroy this card to gain ➕💲💲💲"},
        flavorText: {en: "Stonks only go up 📈"},
        cost: 4,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "stonks.jpg"
    },
    {
        name: {en: 'Piggy bank'},
        triggeredAbilities: [{triggerTypes:['DESTROY'], effect: {effectType: 'BUDGET', value: 3}}],
        text: {en:"➕💲 Destroy this card to gain ➕💲💲💲"},
        flavorText: {},
        cost: 2,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 0,
        photoSrc: "piggy_bank.jpg"
    },
    {
        name: {en: 'Beanbag chair'},
        flavorText: {},
        text: {en: "➕⭐ at the end of the game"},
        cost: 2,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 2,
        photoSrc: "beanbag.jpg"
    },
    {
        name: {en: 'Foosball table'},
        flavorText: {},
        text: {en: "➕⭐⭐⭐ at the end of the game"},
        cost: 4,
        skills: {creativity: 0, knowledge: 0, organization: 0},
        prestige: 5,
        photoSrc: "foosball.jpg"
    },
    {
        name: {en: 'Pristine Programs'},
        flavorText: {en: "A famout book by Uncle Rob"},
        cost: 4,
        skills: {creativity: 0, knowledge: 3, organization: 1},
        prestige: 5,
        photoSrc: "pristine_programs.jpg"
    },
    {
        name: {en: 'A holy scroll'},
        cost: 4,
        skills: {creativity: 0, knowledge: 0, organization: 4},
        flavorText: {en: "Dread it, run from it, destiny arrives all the same."},
        prestige: 5,
        photoSrc: "holy_scroll.jpg"
    },
    {
        name: {en: 'Design handbook'},
        cost: 4,
        skills: {creativity: 3, knowledge: 0, organization: 1},
        prestige: 5,
        photoSrc: "design_handbook.jpg"
    },
]
