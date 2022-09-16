import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppSelector } from '../hooks/redux';
import HR from './HR';
import ModalFilter from './ModalFilter';
import TransparentBlueButton from './TransparentBlueButton';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const reverseShowModal = () => setShowModal(prevState => !prevState);
  const filterState = useAppSelector(state => state.todos.filter);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TransparentBlueButton
          onPress={reverseShowModal}
          innerText={filterState.title}
        />
      </View>
      <HR />
      <ModalFilter
        isShow={showModal}
        filterState={filterState}
        close={reverseShowModal}
      />
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
