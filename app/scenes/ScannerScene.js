import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors} from '../common';

const ScannerScene = () => {
  const onBarCodeRead = (event) => {
    console.log(event.data);
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        aspect={RNCamera.Constants.AutoFocus}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      />
    </View>
  );
};

export default ScannerScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
  },
  camera: {
    flex: 1,
  },
});
