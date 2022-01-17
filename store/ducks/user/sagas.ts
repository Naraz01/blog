import { call, takeLatest, put } from "@redux-saga/core/effects";
import { UserApi } from "../../../utils/api/user";
import { SetUser, SetUserLoadingState } from "./actionCreators";
import { userActionsType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

export function* fetchUserRequest(payload:any):any {
    try {
        const data = yield call(UserApi.getMe, payload.payload);
        yield put(SetUser(data));
    }
    catch (error) {
        yield put(SetUserLoadingState(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(userActionsType.FETCH_USER, fetchUserRequest);
}

