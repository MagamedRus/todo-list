import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BackgroundColor, TextColor } from '../constants/colors';
import Input from './Input';
import ModalButton from './ModalButton';
import Popup from './Popup';

type Props = {
  close: { (): void };
  isShow: boolean;
};

const ModalAddTask = ({ close, isShow }: Props) => {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');

  const addTask = () => console.log(title, task);

  return (
    <Popup close={close} isShow={isShow}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Добавить предмет</Text>
          <Text style={styles.underTitle}>Укажите заголовок и задание</Text>
        </View>

        <View style={styles.inputsContainer}>
          <Input placeholder={'Заголовок'} setValue={setTitle} />
          <Input placeholder={'Задание'} setValue={setTask} />
        </View>

        <View style={styles.buttonsContainer}>
          <ModalButton
            innerText="Отмена"
            onPress={close}
            style={styles.rightWhiteBorder}
            isLightText={true}
          />
          <ModalButton innerText="Сохранить" onPress={addTask} />
        </View>
      </View>
    </Popup>
  );
};

export default ModalAddTask;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: BackgroundColor.lightBackground,
    width: 270,
    height: 219,
    borderRadius: 14,
  },

  header: {
    marginTop: 18,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    textAlign: 'center',
    color: TextColor.darkBrown,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
  },
  underTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    textAlign: 'center',
    color: TextColor.semiGray,
    letterSpacing: -0.078,
    marginTop: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
  },

  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 79,
    marginTop: 16,
    marginHorizontal: 16,
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightWhiteBorder: {
    borderRightColor: BackgroundColor.white,
    borderWidth: 1,
  },
});
