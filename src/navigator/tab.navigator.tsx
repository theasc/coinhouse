import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getTabBarIcon, getTabBarLabel} from "./tabBar.helper";
import {LookUp, QRScan} from "./screenName";

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

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
                <Tab.Screen name={LookUp} component={HomeScreen} />
                <Tab.Screen name={QRScan} component={SettingsScreen} />
            </Tab.Navigator>
    );
}
