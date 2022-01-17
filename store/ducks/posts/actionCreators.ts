import {LoadingState} from "./contracts/state";
import {
    FetchPostsTypes,
    SetPostsTypes,
    SetPostLoadingStateTypes,
    postsActionsType,
    AddPostTypes,
    DeletePostTypes
} from './contracts/actionTypes'

export const SetPosts = (payload: any):SetPostsTypes => ({
    type: postsActionsType.SET_POSTS,
    payload,
});

export const FetchPosts = ():FetchPostsTypes => ({
    type: postsActionsType.FETCH_POSTS
});

export const SetPostsLoadingState = (payload: LoadingState):SetPostLoadingStateTypes => ({
    type: postsActionsType.SET_LOADING_STATE,
    payload
});

export const AddPost = (payload: any):AddPostTypes => ({
    type: postsActionsType.ADD_POST,
    payload
});

export const DeletePost = (payload: any):DeletePostTypes => ({
    type: postsActionsType.DELETE_POST,
    payload
});