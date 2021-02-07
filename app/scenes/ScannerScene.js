import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors} from '../common';
import {APIServices} from '../services';
import LoadingView from '@mahmoudaliibrahim/react-native-loading-view';
import Toast from 'react-native-toast-message';
import {Actions} from 'react-native-router-flux';
import {useIsFocused} from 'react-navigation-hooks';

const ScannerScene = () => {
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
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
          Actions.product({product: result});
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
      {isFocused ? (
        <>
          <RNCamera
            style={styles.camera}
            aspect={RNCamera.Constants.AutoFocus}
            onBarCodeRead={onBarCodeRead}
            captureAudio={false}
          />
          <View style={styles.overlay}>
            <View style={styles.verticalOverlay} />
            <View style={styles.scanLine}>
              <View style={styles.horizontalOverlay} />
              <View style={styles.cameraArea} />
              <View style={styles.horizontalOverlay} />
            </View>
            <View style={styles.verticalOverlay} />
          </View>
        </>
      ) : (
        <View />
      )}
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  verticalOverlay: {
    width: '100%',
    height: '40%',
    backgroundColor: colors.sub_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanLine: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  horizontalOverlay: {
    width: '12%',
    backgroundColor: colors.sub_color,
  },
  cameraArea: {
    flex: 1,
  },
});
