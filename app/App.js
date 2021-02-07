import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {ScannerScene} from './scenes';
import {SafeAreaView} from 'react-navigation';
import {colors} from './common';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{
        top: 'always',
        bottom: 'always',
      }}>
      <StatusBar barStyle="dark-content" />
      <Router>
        <Stack key="app" hideNavBar>
          <Scene key={'scanner'} title={'Scanner'} component={ScannerScene} />
        </Stack>
      </Router>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main_color,
  },
});
