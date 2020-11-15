import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LookUp} from "./screenName";
import {View, Text, StyleSheet} from "react-native";
import { Input, Button } from '@ui-kitten/components';
import {$t} from "../locales";

const Stack = createStackNavigator();

const LookupScreen = () => (
    <View style={s.container}>
        <View style={{margin: 16, alignItems: 'center', flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 13}}>
                {$t('screen.lookup.description')}
            </Text>
            <View style={{height: 40, marginVertical: 15,  paddingHorizontal: 15, width : '100%'}}>
                <Input
                    placeholder='Place your Text'
                    value={''}
                    onChangeText={nextValue => {}}
                    style={{  backgroundColor: '#192138', flex: 1, color: 'white', borderColor: '#000058'}}
                />
            </View>
            <Button onPress={() => {}}>
                {$t('screen.lookup.lookupAction')}
            </Button>
            </View>
    </View>
);

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000058'
    },
});

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
            <Stack.Screen name={LookUp} component={LookupScreen} options={{title: $t('screen.lookup.headerTitle')}} />
        </Stack.Navigator>
    );
}
