import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {RootStackParamList} from '../models/navigator/stacksParamList.type';
import QRScanContainer from '../screens/qr-scan/qr-scan.container';
import {LookupNavigator} from './lookup.navigator';
import {LookUpNav, QRScanNav} from './screenName';
import {getTabBarIcon, getTabBarLabel} from './tabBar.helper';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabNavigator() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => getTabBarIcon(route, focused, color),
                    tabBarLabel: getTabBarLabel(route)
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: 'black'
                    }
                }}
            >
                <Tab.Screen name={LookUpNav} component={LookupNavigator} />
                <Tab.Screen name={QRScanNav} component={QRScanContainer} />
            </Tab.Navigator>
    );
}
