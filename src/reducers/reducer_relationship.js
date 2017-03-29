import { FETCH_ALL_TEACHERS, FETCH_ALL_PARENTS, FETCH_ALL_STUDENTS } from '../actions/index';

const INITIAL_STATE = { allTeachers: [], allParents: [], allStudents: []};

export default function( state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_ALL_TEACHERS:
            return {...state, allTeachers:action.payload.data};
        case FETCH_ALL_PARENTS:
            return {...state, allParents:action.payload.data};
        case FETCH_ALL_STUDENTS:
            return {...state, allStudents:action.payload.data};
        default:
            return state;
    }
}