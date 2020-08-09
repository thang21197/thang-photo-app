import {createSlice} from '@reduxjs/toolkit';

const initialPagtination={
    _current:1,
    _limit:12,
};

const pagination = createSlice({
    name: 'counter',
    initialState: initialPagtination,
    reducers: {
      setCurrent:(state,action)=>{
         state['_current']=action.payload;
      }
    }
})

const {reducer, actions} = pagination;
export const {setCurrent} = actions;
export default reducer;