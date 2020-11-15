import {API_TOKEN} from "../definitions/secret";
import EtherScan from 'etherscan-api';
import {ITransaction} from "../models/transactions/transaction.type";
// 0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a

export function getTransactionWithAddress(address: string): [ITransaction] {
        const api = EtherScan.init(API_TOKEN);
        return api.account.txlist(address, 1, 'latest', 1, 100, 'asc');
}

export function getGasPrice() {
        const api = EtherScan.init(API_TOKEN);
        return api.proxy.eth_gasPrice();
}
