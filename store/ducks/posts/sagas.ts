import { call, takeLatest, put } from "@redux-saga/core/effects";
import { Api } from "../../../utils/api";
import { PostApi } from "../../../utils/api/post";
import { SetPosts, SetPostsLoadingState } from "./actionCreators";
import { postsActionsType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

export function* fetchPostsRequest(payload:any):any {
    try {
        const data = yield call(PostApi.getAll);
        yield put(SetPosts(data));
    }
    catch (error) {
        yield put(SetPostsLoadingState(LoadingState.ERROR))
    }
}

export function* postSaga() {
    yield takeLatest(postsActionsType.FETCH_POSTS, fetchPostsRequest);
}

