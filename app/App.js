import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {ScannerScene} from './scenes';
import {SafeAreaView} from 'react-navigation';
class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Router>
          <Stack key="app" hideNavBar>
            <Scene key={'scanner'} title={'Scanner'} component={ScannerScene} />
          </Stack>
        </Router>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
