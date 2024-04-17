import {Contract} from "../model/contracts/Contract";
import {Industry} from "../model/contracts/Industry";
import {JobType} from "../model/contracts/JobType";

export const tecnical_contracts: Contract[] = [
    {
        name: {en: "Bank database migration"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 2,
            creativity: 0,
        },
        sector: Industry.BUREAUCRACY,
        type: JobType.TECHNICAL,
        storyPoints: 2,
        completionEffects: [{effectType: "SUPPORT", value: 1}],
        permanentEffects: [{effectType: "BUDGET", value: 1}]
    }
]
