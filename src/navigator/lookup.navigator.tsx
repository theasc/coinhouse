import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {$t} from '../locales';
import {LookupStackParamList} from '../models/navigator/stacksParamList.type';
import LookupContainer from '../screens/lookup/lookup.container';
import TransactionDetails from '../screens/transaction-details/transaction-details.component';
import {LookUp, TransactionDetail} from './screenName';

const Stack = createStackNavigator<LookupStackParamList>();

export function LookupNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }}
        >
            <Stack.Screen name={LookUp} component={LookupContainer} options={{title: $t('screen.lookup.headerTitle')}} />
            <Stack.Screen name={TransactionDetail} component={TransactionDetails} options={{title: $t('screen.transactionDetails.headerTitle')}} />
        </Stack.Navigator>
    );
}
