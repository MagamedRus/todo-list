import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { BackgroundColor, TextColor } from '../constants/colors';

type Props = {
  setValue: { (value: string): void };
  placeholder?: string;
};

type InputChangeEvent = NativeSyntheticEvent<TextInputChangeEventData>;

const Input = ({ setValue, placeholder }: Props) => {
  let delayTimer: number;

  const onChange = (ev: InputChangeEvent) => {
    const text: string = ev.nativeEvent.text;
    //Updating state after timer
    delayTimer && clearTimeout(delayTimer);
    delayTimer = setTimeout(() => setValue(text), 200);
  };

  return (
    <TextInput
      style={styles.container}
      onChange={onChange}
      placeholder={placeholder || ''}
      placeholderTextColor={TextColor.lightPlaceholder}
      selectionColor={BackgroundColor.lightSystemBlue}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: '100%',

    borderColor: BackgroundColor.lightBorder,
    backgroundColor: BackgroundColor.white,
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 7,

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.078,
  },
});
