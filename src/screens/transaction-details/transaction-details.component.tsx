import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import {ITransactionDetailsProps} from "../../models/props/screens/transactionDetailsProps.type";
import {transformValue} from "../../helpers/transaction.helper";

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
    transactionsContainer: {
        flex: 1,
        backgroundColor: '#212a45',
        flexDirection: 'column',
        paddingTop: 15,
    },
    transactionItem: {padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0a0f28'},
    itemContainer: {flex: 1, flexDirection: 'column', marginLeft: 15},
    itemTitle: {color: '#f5f6f7', fontSize: 18},
    itemDestination: {color: '#46506a', fontSize: 14},

});

export default TransactionDetailsScreen;
