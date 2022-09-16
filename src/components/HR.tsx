import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackgroundColor } from '../constants/colors';

const HR = () => <View style={styles.container} />;

export default HR;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: BackgroundColor.ghostWhite,
  },
});
