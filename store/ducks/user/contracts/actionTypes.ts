import { Action } from "redux";
import { LoadingState } from "./state";

export enum userActionsType {
    FETCH_USER = 'user/FETCH_USER',
    SET_USER = 'user/SET_USER',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface FetchUserTypes extends Action<userActionsType> {
    type: userActionsType.FETCH_USER;
    payload: any;
}

export interface SetUserTypes extends Action<userActionsType> {
    type: userActionsType.SET_USER;
    payload: any;
}

export interface SetUserLoadingStateTypes extends Action<userActionsType> {
    type: userActionsType.SET_LOADING_STATE;
    payload: LoadingState
}
export type userActions =
 | FetchUserTypes
 | SetUserTypes
 | SetUserLoadingStateTypes;
