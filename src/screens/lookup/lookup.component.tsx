import {Button, Input} from '@ui-kitten/components';
import React from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Assets} from '../../definitions/assets';
import {Colors} from '../../definitions/colors';
import {$t} from '../../locales';
import {ILookupProps} from '../../models/props/screens/lookupProps.type';
import {TransactionDetail} from '../../navigator/screenName';
import {fromWeiToEther} from "../../helpers/transaction.helper";

const LookupScreen = (props: ILookupProps) => (
    <View style={s.container}>
        <View style={s.contentContainer}>
            <Text style={s.descriptionText}>
                {$t('screen.lookup.description')}
            </Text>
            <View style={s.inputContainer}>
                <Input
                    placeholder='Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91'
                    value={props.transactionValue}
                    onChangeText={props.updateSearch}
                    style={[s.input, {borderColor: props.error !== undefined ? 'red' : '#000058'}]}
                    textStyle={{color: 'white'}}
                />
            </View>
            {props.loading ? (
                <View style={s.containerLoader}>
                    <ActivityIndicator size='large' color={'white'}/>
                </View>
            ) : (
                <Button disabled={!props.transactionValue || props.transactionValue.length === 0} style={{width: 150}}
                        onPress={() => props.searchTransaction(props.transactionValue)}>
                    {$t('screen.lookup.lookupAction')}
                </Button>
            )}

        </View>

        {props.transactions && (
            <View style={s.transactionsContainer}>
                <Text style={s.transactionContainerTitle}>{$t('screen.lookup.resultTitle')}</Text>
                <FlatList
                    style={{width: '100%'}}
                    data={props.transactions}
                    keyExtractor={item => item.hash}
                    renderItem={({item, index}) => (
                        <TouchableOpacity style={s.transactionItem}
                                          onPress={() => props.navigation.navigate(TransactionDetail, {transaction: item})}>
                            <Image source={Assets.transaction} style={s.itemImage}/>
                            <View style={s.itemContainer}>
                                <Text style={s.itemTitle}>{`${fromWeiToEther(Number(item.value))} ETH`}</Text>
                                <Text style={s.itemDestination}>{`To: ${item.to}`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )}
    </View>
);

const s = StyleSheet.create({
    container: {flex: 1, backgroundColor: Colors.background.darkBlue},
    contentContainer: {margin: 16, alignItems: 'center', flexDirection: 'column'},
    descriptionText: {color: 'white', fontSize: 13},
    inputContainer: {height: 40, marginVertical: 15, paddingHorizontal: 15, width: '100%'},
    input: {backgroundColor: '#192138', flex: 1, color: 'white'},
    transactionsContainer: {
        flex: 1,
        backgroundColor: Colors.background.violet,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 15
    },
    transactionContainerTitle: {color: 'white', fontSize: 18},
    transactionItem: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.background.darkBlue
    },
    itemContainer: {flex: 1, flexDirection: 'column', marginLeft: 15},
    itemImage: {width: 25, height: 25, tintColor: 'white'},
    itemTitle: {color: '#f5f6f7', fontSize: 18},
    itemDestination: {color: '#46506a', fontSize: 11},
    containerLoader: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    }
});

export default LookupScreen;
