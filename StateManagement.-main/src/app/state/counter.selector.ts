import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

const getCounnterState = createFeatureSelector<counterState>('count')


export const getCounter = createSelector(getCounnterState, state =>{
    return state.counter
})
export const getAppName = createSelector(getCounnterState, state =>{
    return state.appName   
})