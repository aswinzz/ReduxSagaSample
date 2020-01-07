import { put, call } from 'redux-saga/effects';
import { getAllUsers, getUser, deleteUser, addUser } from '../api/api';
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

export function* deleteUserSaga(action){
    try {
        console.log(action.id);
        const user = yield call(deleteUser,action.id);
        console.log("DELETED USER",user);
        yield put({type: types.GET_ALL_USERS_REQUEST});
        yield put({type: types.DELETE_USER_SUCCESS});
    } catch(error){
        yield put({ type: types.DELETE_USER_FAILURE, error});
    }
}

export function* addUserSaga(action){
    try {
        console.log(action.payload);
        const user = yield call(addUser,action.payload);
        console.log("ADD USER",user);
        yield put({type: types.GET_ALL_USERS_REQUEST});
        yield put({type: types.ADD_USER_SUCCESS});
    } catch(error){
        yield put({ type: types.ADD_USER_FAILURE, error});
    }
}