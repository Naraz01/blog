import { userActions, userActionsType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

const initialUser = {
    data: null,
    loadingState: LoadingState.NEVER,
};

export const userReducer = (state = initialUser, action: userActions) => {
      switch (action.type) {
        case (userActionsType.SET_USER) : {
            return { ...state, data: action.payload, loadingState: LoadingState.LOADED };
         }
        case (userActionsType.FETCH_USER) : {
            return { ...state, data: null, loadingState: LoadingState.LOADING };
        }
        case (userActionsType.SET_LOADING_STATE) : {
            return { ...state,  loadingState: action.payload };
        }
        default : {
              return state
        }
      }
};
