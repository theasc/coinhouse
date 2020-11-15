import {IStackNavigationScreenProps} from '../navigator/stackNavigationScreenProps.type';

export interface IQRScanProps extends IStackNavigationScreenProps {
    updateSearch?: (searchValue: string) => void;
    searchTransaction?: (toSearch) => void;
}
