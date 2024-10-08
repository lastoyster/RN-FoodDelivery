import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    restaurant:{
        id:null,
        imgUrl:null,
        title:null,
        rating:null,
        genre:null,
        address:null,
        short_description:null,
        dishes:null,
    },
};

export const restaurantSlice = createSlice({
    name:" basket",
    initialState,
reducers:{
    setRestuarant:(state,action)=>{
        state.restaurant= action.payload;
    },
},
});

export const {setRestuarant} = restaurantSlice.actions;

export default restaurantSlice.reducer;

export const selectRestaurant= (state)=> state.restaurant;