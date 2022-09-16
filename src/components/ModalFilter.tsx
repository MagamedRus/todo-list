import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterRow from './FilterRow';
import Popup from './Popup';
import { FilterType } from '../types/filter';
import { filterStates } from '../constants/filterState';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { changeFilter } from '../store/reducers/filterSlice';

type Props = {
  isShow: boolean;
  close: { (): void };
};

const ModalFilter = ({ isShow, close }: Props) => {
  const filterState = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const setFilter = (filterType: FilterType) =>
    dispatch(changeFilter(filterType));
  const setCurrFilter = (filter: FilterType) => () => setFilter(filter);

  return (
    <Popup isShow={isShow} close={close}>
      <View style={styles.container}>
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_ALL)}
          innerText={filterStates.SHOW_ALL.title}
          isChoosed={filterState.id === filterStates.SHOW_ALL.id}
        />
        <FilterRow
          onPress={setCurrFilter(filterStates.SHOW_COMPLETED)}
          innerText={filterStates.SHOW_COMPLETED.title}
          isChoosed={filterState.id === filterStates.SHOW_COMPLETED.id}
        />
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
    height: 167,
    width: 359,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    borderRadius: 14,
  },
});
