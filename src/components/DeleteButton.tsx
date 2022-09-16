import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import DeleteIcon from '../assets/images/DeleteIcon.png';

type Props = {
  onDelete: { (): void };
};

const DeleteButton = ({ onDelete }: Props) => (
  <TouchableOpacity onPress={onDelete} style={styles.image}>
    <Image style={styles.image} source={DeleteIcon} />
  </TouchableOpacity>
);

export default DeleteButton;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
