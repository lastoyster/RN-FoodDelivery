import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';
import restarantReducer from  './features/RestaurantSlice';

const store = configureStore({
    reducer:{
        basket:basketReducer,
        restaurant:restarantReducer,
    },
});

export default store;