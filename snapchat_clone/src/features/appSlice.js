import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};



export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  
  
});

export const { incrementByAmount } = appSlice.actions;


export const selectapp = (state) => state.app.value;


export default appSlice.reducer;
