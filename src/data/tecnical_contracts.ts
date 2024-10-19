import { StatBonus } from "../model/cards/Effect";
import { TaskAssignment } from "../model/cards/TriggeredAbility";
import { Technology } from "../model/contracts/Contract";
import { Industry } from "../model/contracts/Industry";

export const tecnical_contracts: Technology[] = [
    {
        name: { en: "Microtransactions" },
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 6,
            creativity: 3,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 0,
        completionEffects: [{ effectType: "SUPPORT", value: 1 }],
        bottomeEffects: [
            {
                triggerTypes: ["NONE"],
                effect: { effectType: "BUDGET", value: 1},
            }
        ],
        bottomDescripition: {en: "At the start of your turn gain ➕💲"}
    },
    {
        name: { en: "Version control system" },
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 8,
            creativity: 2,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, { count: 2, compare: "MIN" })],
                effect: { effectType: new StatBonus(0, 0, 2), },
            }
        ],
        topDescripition: {en: "The first time you assign at least 3 employees to a task, gain ➕⚙️⚙️"},
        bottomeEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, { count: 3, compare: "MIN" })],
                effect: { effectType: new StatBonus(1, 1, 1), },
                multiUse: true,
            }
        ],
        bottomDescripition: {en:"EACH time you assign at least 2 employees to a task, gain ➕⚙️, ➕💡, ➕🗒️"},
    },

]
