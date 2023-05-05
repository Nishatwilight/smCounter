import { createReducer,  on } from "@ngrx/store";
import {  addingTheValueS, channelNameModify, decrements, increments, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const counterReducers = createReducer(initialState, 
 on(increments, (state)=>{
  return {
   ...state,
   counter: state.counter +1
  }
 }), on(decrements, (state)=>{
  return {
   ...state,
   counter: state.counter - 1
  }
 }),
 on(reset, (state)=>{
  return {
   ...state,
   counter: 0
  }
 }),
on(addingTheValueS, (state, action)=>{
  console.log('State', state);
  console.log('Action', action);
  return{
    ...state,
    counter: state.counter+ action.valueData
  }
}),
on(channelNameModify, (state) =>{
   return{
    ...state,
    appName: 'Modified Counter Application'
   }
})
 )

export  function counterReducer(states : any, action: any){
 return counterReducers (states, action);
 

}