import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors} from '../common';
import {APIServices} from '../services';
import LoadingView from '@mahmoudaliibrahim/react-native-loading-view';
import Toast from 'react-native-toast-message';

const ScannerScene = () => {
  const [loading, setLoading] = useState(false);
  const onBarCodeRead = (event) => {
    if (event.data) {
      setLoading(true);
      APIServices.getProduct(event.data)
        .then(console.log)
        .catch((error) => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'An Error Occured',
            text2: error.message,
            autoHide: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <LoadingView
      unmount
      isLoading={loading}
      containerStyle={styles.container}
      indicatorColor={colors.main_color}>
      <RNCamera
        style={styles.camera}
        aspect={RNCamera.Constants.AutoFocus}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      />
    </LoadingView>
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
