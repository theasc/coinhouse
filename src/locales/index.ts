import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en.json';

i18n.translations = {
    en: en,
};

i18n.locale = Localization.locale;

export function $t(path: string) {
    return i18n.t(path);
}

