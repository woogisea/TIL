import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes('posts/LIST_POST');

export const listPosts = createAction(
    LIST_POSTS,
    ({page, username, tag}) => ({page, username, tag})
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
};

const initialState = {
    posts : null,
    error : null,
    lastPage : 1
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS] : (state, {payload : posts, meta : response}) => (
            {
                ...state,
                posts,
                lastPage : parseInt(response.headers['last-page'], 10)
            }
        ),

        [LIST_POSTS_FAILURE] : (state, {payload : error}) => (
            {
                ...state,
                error
            }
        )
    }, initialState
);

export default posts;
