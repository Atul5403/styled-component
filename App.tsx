import React from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonWithoutStyledComponent from './src/withoutstyledcomponents/index';
import ButtonElementSingleFile from './src/singlefile/index';
import ButtonElementMultipleFile from './src/multiplefile/index';
import WithoutProps from './src/withoutprops/index';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonWithoutStyledComponent disabled={false} text={'without styled components'} />
      <ButtonElementSingleFile disabled={false} text={'styled component single file'} />
      <ButtonElementMultipleFile disabled={false} text={'styled component multiple file'} />
      <WithoutProps text={'styled component without props'} />
    </View>
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
