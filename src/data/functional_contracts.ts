import {Contract} from "../model/contracts/Contract";
import {Industry} from "../model/contracts/Industry";
import {JobType} from "../model/contracts/JobType";

export const functional_contracts: Contract[] = [
    {
        name: {en: "Landing page"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 1,
            organization: 0,
            creativity: 3,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 3,
    },
    {
        name: {en: "User management"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 4,
            organization: 3,
            creativity: 0,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 3,
    },
    {
        name: {en: "Search funcionality"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 3,
            creativity: 4,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 3,
    },
    {
        name: {en: "Database Migrations"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 2,
            creativity: 0,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 4,
    },
    {
        name: {en: "Microservices"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 3,
            creativity: 2,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 5,
    },
    {
        name: {en: "Microservices"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 3,
            creativity: 2,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 5,
    },
]
