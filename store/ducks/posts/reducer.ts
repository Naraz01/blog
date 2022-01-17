import { postsActions, postsActionsType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

const initialUser = {
    data: null,
    loadingState: LoadingState.NEVER,
};

export const postsReducer = (state = initialUser, action: postsActions) => {
      switch (action.type) {
        case (postsActionsType.SET_POSTS) : {
            return { 
                ...state, 
                data: action.payload, 
                loadingState: LoadingState.LOADED 
            };
        }
        case (postsActionsType.FETCH_POSTS) : {
            return { 
                ...state, 
                data: null, 
                loadingState: LoadingState.LOADING 
            };
        }
        case (postsActionsType.SET_LOADING_STATE) : {
            return { 
                ...state,  
                loadingState: action.payload 
            };
        }
        case (postsActionsType.ADD_POST) : {
            if (state.data !== null) {
                const posts = [...state.data, action.payload]
                return {
                    ...state,
                    data: posts,
                }
            }
        }
        case (postsActionsType.DELETE_POST) : {
            console.log(action.payload);
        }
        default : {
            return state
        }
      }
};
