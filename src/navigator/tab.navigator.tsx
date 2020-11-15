import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getTabBarIcon, getTabBarLabel} from "./tabBar.helper";
import {LookUpNav, QRScanNav} from "./screenName";
import {LookupNavigator} from "./lookup.navigator";
import {RootStackParamList} from "../models/navigator/stacksParamList.type";
import QRScanScreen from "../screens/qr-scan/qr-scan.component";


const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabNavigator() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => getTabBarIcon(route, focused, color),
                    tabBarLabel: getTabBarLabel(route),
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: 'black',
                    }
                }}
            >
                <Tab.Screen name={LookUpNav} component={LookupNavigator} />
                <Tab.Screen name={QRScanNav} component={QRScanScreen} />
            </Tab.Navigator>
    );
}
