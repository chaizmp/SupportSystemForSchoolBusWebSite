import { DELETE_PERSON, TRIGGER_DELETE } from '../actions/index';

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case DELETE_PERSON:
            return action.payload.data;
        case TRIGGER_DELETE:
            return action.payload;
        default:
            return state;
    }
}