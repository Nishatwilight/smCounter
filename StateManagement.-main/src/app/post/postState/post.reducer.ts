import { Action, createReducer } from "@ngrx/store"
import { initialState } from "src/app/state/counter.state"

const _postResucer = createReducer(initialState)

export function postReducer(state: any, action: any){
    return _postResucer(state, action)
}