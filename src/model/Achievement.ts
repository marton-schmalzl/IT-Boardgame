import TranslatedString from "./TranslatedString";

export interface Achievement {
    code: string;
    name: TranslatedString;
    criteria: TranslatedString;
    prestige: number;
}
