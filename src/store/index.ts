import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore;
