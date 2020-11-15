import React from 'react';
import { StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/root.navigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
export default function App() {
  return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootNavigator />
      </ApplicationProvider>
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
