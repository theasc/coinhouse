import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getTabBarIcon, getTabBarLabel} from "./tabBar.helper";
import {LookUpNav, QRScanNav} from "./screenName";
import {LookupNavigator} from "./lookup.navigator";


function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

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
                <Tab.Screen name={QRScanNav} component={SettingsScreen} />
            </Tab.Navigator>
    );
}
