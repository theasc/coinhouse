import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from "react-native";
import {ITransactionDetailsProps} from "../../models/props/screens/transactionDetailsProps.type";


function transformValue(key: string, value: string): string{
    switch (key) {
        case 'gas':
        case 'gasPrice':
            return `${value} WEI`;
        case 'timestamp':
            return (new Date(value)).toString();
        default:
            return value;
    }
}

const TransactionDetailsScreen = (props: ITransactionDetailsProps) => {
    const { transaction } = props.route.params;
    return (
        <ScrollView style={s.transactionsContainer}>
            {transaction && Object.entries(transaction).map(([key, value], index) => (
                value ? (<View key={index} style={s.transactionItem}>
                    <View style={s.itemContainer}>
                        <Text style={s.itemTitle}>{key}</Text>
                        <Text style={s.itemDestination}>{transformValue(key, `${value}`)}</Text>
                    </View>
                </View>) : null
            ))}
        </ScrollView>
    );
}

const s = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#0a0f28'},
    contentContainer: {margin: 16, alignItems: 'center', flexDirection: 'column',},
    descriptionText: {color: 'white', fontSize: 13},
    inputContainer: {height: 40, marginVertical: 15, paddingHorizontal: 15, width: '100%'},
    input: {backgroundColor: '#192138', flex: 1, color: 'white', borderColor: '#000058'},
    transactionsContainer: {
        flex: 1,
        backgroundColor: '#212a45',
        flexDirection: 'column',
        paddingTop: 15,
    },
    transactionContainerTitle: {color: 'white', fontSize: 18},
    transactionItem: {padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0a0f28'},
    itemContainer: {flex: 1, flexDirection: 'column', marginLeft: 15},
    itemImage: {width: 25, height: 25, tintColor: 'white'},
    itemTitle: {color: '#f5f6f7', fontSize: 18},
    itemDestination: {color: '#46506a', fontSize: 14},

});

export default TransactionDetailsScreen;
