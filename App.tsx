import React from 'react';
import { StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/root.navigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store";

export default function App() {
  return (
      <Provider store={store}>
          <ApplicationProvider {...eva} theme={eva.light}>
              <RootNavigator />
          </ApplicationProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
