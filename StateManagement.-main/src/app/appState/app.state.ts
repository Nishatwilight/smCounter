import { postReducer } from "../post/postState/post.reducer";
import { PostState } from "../post/postState/post.state";
import { counterReducer } from "../state/counter.reducer";
import { counterState } from "../state/counter.state";

export interface AppState{
   counter: counterState ;
   posts: PostState;
}
export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}