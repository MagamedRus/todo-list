import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterRow from './FilterRow';
import Popup from './Popup';
import { FilterType } from '../types/filter';
import { filterStates } from '../constants/filterState';

type Props = {
  isShow: boolean;
  close: { (): void };
};

const ModalFilter = ({ isShow, close }: Props) => {
  const setFilter = (filterType: FilterType) => {
    console.log(filterType);
  };
  const setCurrFilter = (filter: FilterType) => () => setFilter(filter);

  return (
    <Popup isShow={isShow} close={close}>
      <View style={styles.container}>
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_ALL)}
          innerText={filterStates.SHOW_ALL.title}
          isChoosed={false}
        />
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_COMPLETED)}
          innerText={filterStates.SHOW_COMPLETED.title}
          isChoosed={true}
        />
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_UNCOMPLETED)}
          innerText={filterStates.SHOW_UNCOMPLETED.title}
          isChoosed={false}
        />
      </View>
    </Popup>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 167,
    width: 359,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    borderRadius: 14,
  },
});
