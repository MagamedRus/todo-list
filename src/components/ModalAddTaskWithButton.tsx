import React, { useState } from 'react';
import BlueButton from './BlueButton';
import ModalAddTask from './ModalAddTask';

const ModalAddTaskWithButton = () => {
  const [showAddModal, setShowModal] = useState(false);
  const toggleShowAddModal = () => setShowModal(prevState => !prevState);

  return (
    <>
      <BlueButton onPress={toggleShowAddModal} innerText={'Добавить'} />
      <ModalAddTask close={toggleShowAddModal} isShow={showAddModal} />
    </>
  );
};

export default ModalAddTaskWithButton;
