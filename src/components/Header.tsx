import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HR from './HR';
import ModalFilter from './ModalFilter';
import TransparentBlueButton from './TransparentBlueButton';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const reverseShowModal = () => setShowModal(prevState => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TransparentBlueButton
          onPress={reverseShowModal}
          innerText={'Показывать все задания'}
        />
      </View>
      <HR />
      <ModalFilter isShow={showModal} close={reverseShowModal} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 128,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 127,
  },
});
