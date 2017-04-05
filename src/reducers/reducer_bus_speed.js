import { FETCH_BUS_SPEED } from '../actions/index';

const INITIAL_STATE = {time:-1, distance:-1}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_BUS_SPEED:
            return action.payload.data;
        default:
            return state;
    }
}