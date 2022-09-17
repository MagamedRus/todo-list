import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterRow from './FilterRow';
import Popup from './Popup';
import { FilterType } from '../types/filter';
import { filterStates } from '../constants/filterState';
import { useAppDispatch } from '../hooks/redux';
import { BackgroundColor } from '../constants/colors';
import { changeFilter } from '../store/reducers/todosSlice';

type Props = {
  isShow: boolean;
  filterState: FilterType;
  close: { (): void };
};

const ModalFilter = ({ isShow, close, filterState }: Props) => {
  const dispatch = useAppDispatch();
  const setFilter = (filterType: FilterType) =>
    dispatch(changeFilter(filterType)) && close();
  const setCurrFilter = (filter: FilterType) => () => setFilter(filter);

  return (
    <Popup isShow={isShow} close={close}>
      <View style={styles.container}>
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_ALL)}
          innerText={filterStates.SHOW_ALL.title}
          isChoosed={filterState.id === filterStates.SHOW_ALL.id}
        />
        <View style={styles.whiteRow} />
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_COMPLETED)}
          innerText={filterStates.SHOW_COMPLETED.title}
          isChoosed={filterState.id === filterStates.SHOW_COMPLETED.id}
        />
        <View style={styles.whiteRow} />
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_UNCOMPLETED)}
          innerText={filterStates.SHOW_UNCOMPLETED.title}
          isChoosed={filterState.id === filterStates.SHOW_UNCOMPLETED.id}
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
    width: 359,
    backgroundColor: BackgroundColor.lightBackground,
    borderRadius: 14,

    //shadow
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  whiteRow: {
    height: 1,
    backgroundColor: BackgroundColor.white,
  },
});
