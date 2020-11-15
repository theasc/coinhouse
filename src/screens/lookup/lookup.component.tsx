import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {$t} from "../../locales";
import {Button, Input} from "@ui-kitten/components";
import {ILookupProps} from "../../models/props/screens/lookupProps.type";

const LookupScreen = (props: ILookupProps) => (
    <View style={s.container}>
        <View style={s.contentContainer}>
            <Text style={s.descriptionText}>
                {$t('screen.lookup.description')}
            </Text>
            <View style={s.inputContainer}>
                <Input
                    placeholder='Place your Text'
                    value={props.transactionValue}
                    onChangeText={props.updateSearch}
                    style={s.input}
                    textStyle={{ color: 'white' }}
                />
            </View>
            <Button onPress={() => {}}>
                {$t('screen.lookup.lookupAction')}
            </Button>
        </View>
    </View>
);

const s = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000058' },
    contentContainer: {margin: 16, alignItems: 'center', flexDirection: 'column'},
    descriptionText: {color: 'white', fontSize: 13},
    inputContainer: {height: 40, marginVertical: 15,  paddingHorizontal: 15, width : '100%'},
    input: {  backgroundColor: '#192138', flex: 1, color: 'white', borderColor: '#000058'},
});

export default LookupScreen;
