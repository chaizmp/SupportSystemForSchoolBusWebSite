import { FETCH_PERSON, FETCH_STUDENTS_BY_PERSON } from '../actions/index';

const INITIAL_STATE = { person: null, students: []};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_PERSON:
            return { ...state, person:action.payload.data};
        case FETCH_STUDENTS_BY_PERSON:
            return { ...state, students:action.payload.data};
        default:
            return state;
    }
}