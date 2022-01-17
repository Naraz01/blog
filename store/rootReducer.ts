import { combineReducers } from "redux";
import { postsReducer } from "./ducks/posts/reducer";
import { userReducer } from "./ducks/user/reducer"

export const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});
