import {createSlice} from '@reduxjs/toolkit';

const initialPagtination={
    _current:1,
    _limit:10,
};

const pagination = createSlice({
    name: 'counter',
    initialState: initialPagtination,
    reducers: {
      getDataPage:(state,action)=>{
         
      }
    }
})

const {reducer, actions} = pagination;
export const {getDataPage} = actions;
export default reducer;