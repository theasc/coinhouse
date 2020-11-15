import {LookUp, LookUpNav, QRScanNav, TransactionDetail} from "../../navigator/screenName";

export type RootStackParamList = {
    LookUpNav: undefined;
    QRScanNav: undefined;
};

export type LookupStackParamList = {
    LookUp: { lookupQRCode: string },
    TransactionDetail: { transaction: IDBTransaction },
}
