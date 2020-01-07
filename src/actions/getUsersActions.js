import * as types from '../constants/actionTypes';

export const getAllUsersRequest = () => {
    console.log("GET ALL USERS REQUEST ACTION RECIEVED");
    return ({
        type: types.GET_ALL_USERS_REQUEST
    });
}

export const getUserRequest = (id) => {
    console.log("GET USER REQUEST ACTION RECIEVED WITH PARAMS ",id);
    return ({
        type: types.GET_USER_REQUEST,
        id
    });
}
