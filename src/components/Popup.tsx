import React, { useEffect } from 'react';
import { Modal, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
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
      onTouchCancel={close}
      onRequestClose={close}>
      <TouchableOpacity onPress={close} style={styles.container}>
        {children}
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
  },
});
