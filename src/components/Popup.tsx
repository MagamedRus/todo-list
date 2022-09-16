import React, { useEffect } from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { BackgroundColor } from '../constants/colors';

type Props = {
  children: JSX.Element;
  isShow: boolean;
  close: { (): void };
};

const Popup = ({ close, children, isShow }: Props) => {
  useEffect(() => {
    isShow
      ? StatusBar.setBackgroundColor(BackgroundColor.modalShadow)
      : StatusBar.setBackgroundColor(BackgroundColor.white);
  }, [isShow]);

  return (
    <Modal
      visible={isShow}
      animationType="fade"
      transparent={true}
      onRequestClose={close}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={close}
        style={styles.container}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.modalShadow,
    opacity: 1,
  },
});
