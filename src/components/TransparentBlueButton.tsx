import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  onPress: { (): void };
  innerText: string;
};

const TransparentBlueButton = ({ onPress, innerText }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.innerText}>{innerText}</Text>
  </TouchableOpacity>
);

export default TransparentBlueButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: '100%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3785CC',
  },
  innerText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#3785CC',
  },
});
