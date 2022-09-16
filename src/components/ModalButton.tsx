import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BackgroundColor, TextColor } from '../constants/colors';

type Props = {
  onPress: { (): void };
  innerText: string;
  style?: object;
  isLightText?: boolean;
};

const ModalButton = ({ onPress, innerText, isLightText }: Props) => (
  <TouchableOpacity style={[styles.container]} onPress={onPress}>
    <Text style={[styles.innerText, isLightText && styles.lightInnerText]}>
      {innerText}
    </Text>
  </TouchableOpacity>
);

export default ModalButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.transparent,
    borderTopColor: BackgroundColor.white,
    width: 134,
    height: 44,
    borderTopWidth: 1,
  },
  innerText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    textAlign: 'center',
    width: 134,
    height: 44,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',

    color: TextColor.buttonSkyBlue,
  },
  lightInnerText: {
    color: TextColor.lightButton,
  },
});
