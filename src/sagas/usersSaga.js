import { put, call } from 'redux-saga/effects';
import { getAllUsers, getUser } from '../api/api';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* getAllUsersSaga() {
  try {
    const users = yield call(getAllUsers);
    // console.log("USERS",users);
    yield put({ type: types.GET_ALL_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: types.GET_ALL_USERS_FAILURE, error });
  }
}

export function* getUserSaga(action){
    try {
        console.log(action.id);
        const user = yield call(getUser,action.id);
        console.log("USER",user);
        yield put({type: types.GET_USER_SUCCESS, user});
    } catch(error){
        yield put({ type: types.GET_USER_FAILURE, error});
    }
}