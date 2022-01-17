import { all } from 'redux-saga/effects';
import { postSaga } from './ducks/posts/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
    yield all([
        userSaga(),
        postSaga()
    ]);
}
