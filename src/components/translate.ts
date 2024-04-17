import TranslatedString from "../model/TranslatedString";

function tr(text: TranslatedString): string {
    return text.en || ''; //@FIXME
}
export default tr;
