import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LookUp} from "./screenName";
import {$t} from "../locales";
import LookupContainer from "../screens/lookup/lookup.container";

const Stack = createStackNavigator();


export function LookupNavigator(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }}
        >
            <Stack.Screen name={LookUp} component={LookupContainer} options={{title: $t('screen.lookup.headerTitle')}} />
        </Stack.Navigator>
    );
}
