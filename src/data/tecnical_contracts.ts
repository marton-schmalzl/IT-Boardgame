import { StatBonus } from "../model/cards/Effect";
import { FeatureAssignment, TaskAssignment, TaskCompletion } from "../model/cards/TriggeredAbility";
import { Technology } from "../model/contracts/Contract";
import { Industry } from "../model/contracts/Industry";

export const tecnical_contracts: Technology[] = [
    {
        name: { en: "Microtransactions" },
        photoSrc: 'microtransactions.jpg',
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
        bottomEffects: [
            {
                triggerTypes: ["NONE"],
                effect: { effectType: "BUDGET", value: 1},
            }
        ],
        bottomDescription: {en: "At the start of your turn gain ➕💲"}
    },
    {
        name: { en: "Version control system" },
        photoSrc: 'source_control.jpg',
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
        topDescription: {en: "The first time you assign at least 3 employees to a task, gain ➕⚙️⚙️"},
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, { count: 3, compare: "MIN" })],
                effect: { effectType: new StatBonus(1, 1, 1), },
                multiUse: true,
            }
        ],
        bottomDescription: {en:"EACH time you assign at least 2 employees to a task, gain ➕⚙️, ➕💡, ➕🗒️"},
    },
    {
        name: { en: "Agile Methodology" },
        photoSrc: 'agile_methodology.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 7,
            creativity: 4,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: ["PROJECT_START"],
                effect: { effectType: "ORGANIZATION", value: 1 },
            },
        ],
        topDescription: { en: "When you start a project, gain ➕🗒️ for your first task" },
        bottomEffects: [
            {
                triggerTypes: [new TaskCompletion()],
                effect: {
                    effectType: new StatBonus(0,0,1),
                },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you complete a task, for your next task on the same turn gain ➕⚙️, ➕💡, ➕🗒️",
        },
    },
    {
        name: { en: "Automated Testing" },
        photoSrc: 'automated_testing.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 7,
            organization: 5,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            // {
            //     triggerTypes: ["TEST_RUN"],
            //     effect: { effectType: "KNOWLEDGE", value: 1 },
            // },
        ],
        topDescription: { en: "When you run tests, gain ➕⚙️" },
        bottomEffects: [
            // {
            //     triggerTypes: ["BUG_FIX"],
            //     effect: { effectType: "KNOWLEDGE", value: 2 },
            //     multiUse: true,
            // },
        ],
        bottomDescription: { en: "Each time you fix a bug, gain ➕⚙️⚙️" },
    },
    {
        name: { en: "Continuous Integration" },
        photoSrc: 'continuos_integration.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 7,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [],
                effect: { effectType: "ORGANIZATION", value: 1 },
            },
        ],
        topDescription: { 
            en: "After each completed task, gain an extra progress point",
        },
        bottomEffects: [
        ],
        bottomDescription: {
            en: "After each completed task, gain ➕⚙️⚙️ for your next task that turn",
        },
    },
    {
        name: { en: "Cloud Infrastructure" },
        photoSrc: 'cloud_infra.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 8,
            organization: 4,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [{ effectType: "BUDGET", value: -2 }],
        topEffects: [
        ],
        topDescription: { en: "When you assign an employee with ⚙️ skill of 5 or more, gain ➕⚙️" },
        bottomEffects: [
            {
                triggerTypes: [new TaskCompletion()],
                effect: { effectType: "BUDGET", value: 3 },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you complete a project, gain ➕💲💲💲",
        },
    },
    {
        name: { en: "Machine Learning Algorithms" },
        photoSrc: 'machine_learning.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 9,
            organization: 3,
            creativity: 7,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
        ],
        topDescription: { en: "+⭐ at the end of game" },
        bottomEffects: [
        ],
        bottomDescription: {
            en: "➕⚙️ towards an assignment. Put a marker on it every time this is activated (max 3). ➕⚙️ for each marker",
        },
    },
    {
        name: { en: "User Experience Optimization" },
        photoSrc: 'ux.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 4,
            organization: 5,
            creativity: 8,
        },
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [new FeatureAssignment()],
                effect: { effectType: new StatBonus(0,1,0), value: 1 },
            },
        ],
        sector: Industry.ENTERTAINMENT,
        topDescription: { en: "Gain ➕💡 towards a feature assignment" },
        bottomEffects: [
            {
                triggerTypes: [],
                effect: { effectType: "CREATIVITY", value: 2 },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you implement a new feature, gain ➕💡💡 for the next feature on that turn.",
        },
    },
]
