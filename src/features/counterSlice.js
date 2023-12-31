import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name : 'counter',
    initialState :{
        value : 0
    },
    reducers : {
        increment : (state)=>{
            state.value = state.value + 1
        },
        decrement : (state)=>{
            state.value = state.value - 1
        },
        reset : (state,{payload:{value}})=>{
            state.value = value
        }
    }
})

//console.log(counterSlice)
export const {increment,decrement,reset} = counterSlice.actions

export const counterReducer = counterSlice.reducer