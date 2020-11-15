import {IStackNavigationScreenProps} from "../navigator/stackNavigationScreenProps.type";
import { RouteProp } from '@react-navigation/native';
import {LookupStackParamList} from "../../navigator/stacksParamList.type";
import {TransactionDetail} from "../../../navigator/screenName";

type TransactionDetailScreenRouteProps = RouteProp<LookupStackParamList, typeof TransactionDetail>

export interface ITransactionDetailsProps extends IStackNavigationScreenProps{
    route: TransactionDetailScreenRouteProps,
}
