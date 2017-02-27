import { FETCH_STUDENTS, FETCH_STUDENT } from '../actions/index';

const INITIAL_STATE = { all: [], student: null}

export default function( state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_STUDENT:
            return { ...state, student:action.payload.data};
        case FETCH_STUDENTS:
            return { ...state, all:action.payload.data };
        default:
            return state;
    }
}