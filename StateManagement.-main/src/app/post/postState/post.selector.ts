import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

export const getPost = createFeatureSelector<PostState>('posts')

export const postVal = createSelector(getPost, state =>{
    return state.posts
})


