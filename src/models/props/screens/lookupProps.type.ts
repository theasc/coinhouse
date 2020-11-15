import {IStackNavigationScreenProps} from "../navigator/stackNavigationScreenProps.type";

export interface ILookupProps extends IStackNavigationScreenProps{
    transactionValue?: string,
    updateSearch?: () => void,
}
