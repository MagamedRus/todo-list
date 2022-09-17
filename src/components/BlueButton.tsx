import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BackgroundColor, TextColor } from '../constants/colors';

type Props = {
  onPress: { (): void };
  innerText: string;
};

const BlueButton = ({ onPress, innerText }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.innerText}>{innerText}</Text>
  </TouchableOpacity>
);

export default BlueButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    height: 55,
    backgroundColor: BackgroundColor.skyBlue,
    borderRadius: 8,
    marginTop: 36,
  },
  innerText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: TextColor.white,
  },
});
