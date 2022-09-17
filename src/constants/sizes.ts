import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const statusBarHeight = StatusBar.currentHeight || 0;
export enum ComponentHeights {
  header = 128,
  blueButton = 100 /** 55 height + 45 margin */,
  todos = screenHeight - header - blueButton - statusBarHeight,
}
