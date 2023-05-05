import { createAction, props } from "@ngrx/store";

export const increments = createAction('a')
export const decrements = createAction('decrements')
export const reset = createAction('reset')
export const addingTheValueS = createAction('addingVal', 
props<{ valueData: number }>())

export const channelNameModify = createAction('channelModification')