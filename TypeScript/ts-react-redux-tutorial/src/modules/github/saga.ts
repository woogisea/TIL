import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { put, call , takeLatest } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";

function* getUserProfileSaga(action : ReturnType<typeof getUserProfileAsync.request>) {
    try{
        const userProfile : GithubProfile = yield call(getUserProfile, action.payload);
        yield put(getUserProfileAsync.success(userProfile));
    }catch(e) {
        yield put(getUserProfileAsync.failure(e))
    }
}

export function* githubSaga() {
    yield takeLatest(GET_USER_PROFILE, getUserProfileSaga);
}