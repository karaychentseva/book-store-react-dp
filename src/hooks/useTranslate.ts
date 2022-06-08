import { useSelector } from "./useSelector";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

type TranslateType = {
    [prop: string]: string
}

type TranslatesType = {
    [prop: string]: TranslateType    
}

const translates: TranslatesType = { en, ru };

export const useTranslate = () => {
    const language = useSelector(state => state.language.language);

    const t = (id: string) => {
        const translate = translates[language];
        return translate[id] ?? id;
    }

    return t;
}