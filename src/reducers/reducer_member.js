import { SIGN_IN, SIGN_UP, ADD_RELATIONSHIP } from '../actions/index'

const INITIAL_STATE = { signInResult: null, signUpResult: null, addRelationshipResult: null}

export default function( state = INITIAL_STATE, action) {
    switch(action.type){
        case SIGN_IN:
            return {...state, signInResult:action.payload.data};
        case SIGN_UP:
            return {...state, signUpResult:action.payload.data};
        case ADD_RELATIONSHIP:
            return {...state, addRelationshipResult:action.payload.data};
        default:
            return state;
    }
}