import React from 'react';
import { Image } from "react-native";
import {LookUp, QRScan} from "./screenName";
import {Assets} from "../definitions/assets";
import {$t} from "../locales";


const TAB_BAR_ICONS = {
    [LookUp]: Assets.etherum,
    [QRScan]: Assets.qrCode,
};

export const getTabBarIcon = (route, focused, tintColor) => {
    const iconName = TAB_BAR_ICONS[route.name];
    return <Image style={{ height: '70%', width: '70%', tintColor }} source={iconName} resizeMode="contain" />;
};

const TAB_BAR_LABELS = {
    [LookUp]: 'screen.tabBar.lookup',
    [QRScan]: 'screen.tabBar.qrScan',
};

export const getTabBarLabel = (route) => $t(TAB_BAR_LABELS[route.name]);
