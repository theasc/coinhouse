import {StyleSheet, Text, View} from "react-native";
import React, { useState, useEffect} from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Button} from "@ui-kitten/components";
import {LookUp, LookUpNav} from "../../navigator/screenName";
import {$t} from "../../locales";

function QRScanScreen(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scannedData, setScannedData] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScannedData(data);
        alert($t('screen.qrScan.alert', {type, data}));
    };

    const onReScan = () => {
        setScannedData(null);
    }

    const onLookup = () => {
        setScannedData(null);
        const params: any = {screen: LookUp, params: { lookupQRCode: scannedData }};
        props.navigation.navigate(LookUpNav, params);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={s.container}>
            <BarCodeScanner
                onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scannedData && (
                <View style={s.bottomBar}>
                    <View style={s.url} >
                        <Text numberOfLines={1} style={s.urlText}>
                            {`${$t('screen.qrScan.address')}: ${scannedData}`}
                        </Text>
                    </View>
                    <View
                        style={s.cancelButton}>
                        <View style={s.flex1}>
                            <Button style={s.actionButton} onPress={onReScan} >{$t('screen.qrScan.reScan')}</Button>
                        </View>
                        <View style={s.flex1}>
                            <Button style={s.actionButton} onPress={onLookup}>
                                {$t('screen.qrScan.lookup')}
                            </Button>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const s = StyleSheet.create({
    flex1: {flex: 1},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',

        flexDirection: 'column',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 12,
        textAlign: "center",
        paddingVertical: 10,
    },
    cancelButton: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#0a0f28',
        justifyContent: "center"
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
    actionButton : {width: '90%', backgroundColor: 'black', alignSelf: "center"},
});

export default QRScanScreen;
