import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {colors, constants} from '../common';

const ProductScene = ({product}) => {
  const {image_url, description, company, code, size} = product;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image_url}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <View style={styles.details}>
        <Text style={styles.code}>{code}</Text>
        {!!description && <Text style={styles.description}>{description}</Text>}
        {!!company && (
          <Text style={styles.company}>
            Manufactured By: <Text style={styles.companyTxt}>{company}</Text>
          </Text>
        )}
        {!!size && (
          <View style={styles.size}>
            <Text style={styles.sizeTxt}>{size}</Text>
            <Text style={styles.sizeTitle}>Size</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProductScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
    padding: constants.PADDING,
  },
  image: {
    width: '100%',
    height: 500,
  },
  details: {
    flex: 1,
    padding: constants.PADDING,
  },
  code: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: constants.PADDING,
    color: colors.main_text_color,
  },
  description: {
    fontSize: 20,
    lineHeight: 32,
    paddingBottom: constants.PADDING,
    color: colors.text_color,
  },
  company: {
    fontSize: 16,
    color: colors.sub_text_color,
    paddingBottom: constants.PADDING,
  },
  companyTxt: {
    fontWeight: 'bold',
    color: colors.main_text_color,
  },
  size: {
    borderWidth: 1,
    width: 100,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: constants.PADDING / 2,
    borderColor: colors.border_color,
  },
  sizeTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeTitle: {
    fontSize: 18,
  },
});
