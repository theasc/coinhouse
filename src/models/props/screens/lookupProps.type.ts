import {IStackNavigationScreenProps} from "../navigator/stackNavigationScreenProps.type";
import {ITransaction} from "../../transactions/transaction.type";
import {RouteProp} from "@react-navigation/native";
import {LookupStackParamList} from "../../navigator/stacksParamList.type";
import {LookUp} from "../../../navigator/screenName";

type LookupScreenRouteProps = RouteProp<LookupStackParamList, typeof LookUp>

export interface ILookupProps extends IStackNavigationScreenProps{
    route: LookupScreenRouteProps,
    transactionValue?: string,
    transactions?: [ITransaction],
    error?: string,
    updateSearch?: (searchValue: string) => void,
    searchTransaction?: (toSearch) => void,
}
