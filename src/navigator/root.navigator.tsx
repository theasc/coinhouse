import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./tab.navigator";


export default function RootNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
