import {LoadingState} from "./contracts/state";
import {
    FetchUserTypes,
    SetUserTypes,
    SetUserLoadingStateTypes,
    userActionsType
} from './contracts/actionTypes'

export const SetUser = (payload: any):SetUserTypes => ({
    type: userActionsType.SET_USER,
    payload,
});

export const FetchUser = (payload: number | string):FetchUserTypes => ({
    type: userActionsType.FETCH_USER,
    payload,
});

export const SetUserLoadingState = (payload: LoadingState):SetUserLoadingStateTypes => ({
    type: userActionsType.SET_LOADING_STATE,
    payload
});
