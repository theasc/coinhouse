import React from 'react';
import { Image } from "react-native";
import {LookUpNav, QRScanNav} from "./screenName";
import {Assets} from "../definitions/assets";
import {$t} from "../locales";


const TAB_BAR_ICONS = {
    [LookUpNav]: Assets.etherum,
    [QRScanNav]: Assets.qrCode,
};

export const getTabBarIcon = (route, focused, tintColor) => {
    const iconName = TAB_BAR_ICONS[route.name];
    return <Image style={{ height: '70%', width: '70%', tintColor }} source={iconName} resizeMode="contain" />;
};

const TAB_BAR_LABELS = {
    [LookUpNav]: 'screen.tabBar.lookup',
    [QRScanNav]: 'screen.tabBar.qrScan',
};

export const getTabBarLabel = (route) => $t(TAB_BAR_LABELS[route.name]);
