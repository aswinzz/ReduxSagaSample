import { takeLatest, all } from 'redux-saga/effects';
import { getAllUsersSaga, getUserSaga, deleteUserSaga, addUserSaga } from './usersSaga';
import * as types from '../constants/actionTypes';

// Watches for GET_ALL_USERS_REQUEST action type asynchronously
export default function* watchUsers() {
  yield all([
    takeLatest(types.GET_ALL_USERS_REQUEST,getAllUsersSaga),
    takeLatest(types.GET_USER_REQUEST,getUserSaga),
    takeLatest(types.DELETE_USER_REQUEST,deleteUserSaga),
    takeLatest(types.ADD_USER_REQUEST,addUserSaga)
  ])
}