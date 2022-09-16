import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CheckMarkIcon from '../assets/images/CheckMarkIcon.png'
import CheckedMarkIcon from '../assets/images/CheckedMarkIcon.png'

type Props = {
  onMark: { (): void };
  isMarked: boolean;
};

const ReadButton = ({ onMark, isMarked }: Props) =>
(
  <TouchableOpacity onPress={onMark}>
    <Image style={styles.image} source={isMarked ? CheckedMarkIcon : CheckMarkIcon } />
  </TouchableOpacity>
);

export default ReadButton;

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
  },
})