import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en.json';

i18n.translations = {
    en: en,
};

i18n.locale = Localization.locale.split('-')[0];

export function $t(path: string, option?: object) {
    return i18n.t(path, option);
}

