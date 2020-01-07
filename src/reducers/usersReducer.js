import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function( state = initialState.users, action){
    switch(action.type){
        case types.GET_ALL_USERS_REQUEST:
            console.log("USERS REQUEST REDUCER");
            return state;
        case types.GET_ALL_USERS_FAILURE:
            console.log("USERS FAILURE REDUCER");
            return {...state,error:action.error};
        case types.GET_ALL_USERS_SUCCESS:
            console.log("USERS SUCCESS REDUCER");
            return {...state,users:action.users};
        case types.GET_USER_REQUEST:
            console.log("USER REQUEST REDUCER");
            return state;
        case types.GET_USER_FAILURE:
            console.log("USER FAILURE REDUCER");
            return {...state,error:action.error};
        case types.GET_USER_SUCCESS:
            console.log("USER SUCCESS REDUCER");
            return {...state,user:action.user};
        case types.DELETE_USER_REQUEST:
            console.log("DELETE USER REQUEST REDUCER");
            return state;
        case types.DELETE_USER_FAILURE:
            console.log("DELETE FAILURE REDUCER");
            return {...state,error:action.error};
        case types.DELETE_USER_SUCCESS:
            console.log("DELETE SUCCESS REDUCER");
            return {...state};
        case types.ADD_USER_REQUEST:
            console.log("ADD USER REQUEST REDUCER");
            return state;
        case types.ADD_USER_FAILURE:
            console.log("ADD FAILURE REDUCER");
            return {...state,error:action.error};
        case types.ADD_USER_SUCCESS:
            console.log("ADD SUCCESS REDUCER");
            return {...state};
        default:
            return state;
    }
}