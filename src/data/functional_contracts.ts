import {Contract} from "../model/contracts/Contract";
import {Industry} from "../model/contracts/Industry";
import {JobType} from "../model/contracts/JobType";

export const functional_contracts: Contract[] = [
    {
        name: {en: "Bank registration campaign"},
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 1,
            organization: 0,
            creativity: 3,
        },
        sector: Industry.BUREAUCRACY,
        type: JobType.FUNCTIONAL,
        storyPoints: 5,
    }
]
