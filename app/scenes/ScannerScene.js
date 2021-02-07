import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors} from '../common';

export default class ScannerScene extends Component {
  onBarCodeRead = (event) => {
    console.log(event.data);
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.camera}
          aspect={RNCamera.Constants.AutoFocus}
          ref={(cam) => (this.camera = cam)}
          onBarCodeRead={this.onBarCodeRead}
          captureAudio={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
  },
  camera: {
    flex: 1,
  },
});
