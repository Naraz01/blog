import { Action } from "redux";
import { LoadingState } from "./state";

export enum postsActionsType {
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_POSTS = 'posts/SET_POSTS',
    SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
    ADD_POST = 'posts/ADD_POST',
    DELETE_POST = 'posts/DELETE_POST'
}

export interface FetchPostsTypes extends Action<postsActionsType> {
    type: postsActionsType.FETCH_POSTS;
}

export interface SetPostsTypes extends Action<postsActionsType> {
    type: postsActionsType.SET_POSTS;
    payload: any;
}

export interface SetPostLoadingStateTypes extends Action<postsActionsType> {
    type: postsActionsType.SET_LOADING_STATE;
    payload: LoadingState

}
export interface AddPostTypes extends Action<postsActionsType> {
    type: postsActionsType.ADD_POST;
    payload: any
}

export interface DeletePostTypes extends Action<postsActionsType> {
    type: postsActionsType.DELETE_POST;
    payload: any
}

export type postsActions =
 | FetchPostsTypes
 | SetPostsTypes
 | SetPostLoadingStateTypes
 | AddPostTypes
 | DeletePostTypes;
