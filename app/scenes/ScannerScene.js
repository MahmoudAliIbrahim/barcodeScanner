import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors} from '../common';
import {APIServices} from '../services';
import LoadingView from '@mahmoudaliibrahim/react-native-loading-view';
import Toast from 'react-native-toast-message';

const ScannerScene = () => {
  const [loading, setLoading] = useState(false);

  const showError = (message) => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'An Error Occurred',
      text2: message,
      autoHide: true,
    });
  };
  const onBarCodeRead = (event) => {
    if (event.data) {
      setLoading(true);
      APIServices.getProduct(event.data)
        .then((result) => {
          if (result.status !== 'active') {
            showError(`This barcode is ${result.status}`);
          }
        })
        .catch((error) => {
          showError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      showError('This barcode is invalid');
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
