import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import TabNavigator from './tab.navigator';

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
