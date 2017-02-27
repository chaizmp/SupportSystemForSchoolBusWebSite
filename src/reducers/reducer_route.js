import { FETCH_ROUTE } from '../actions/index'

const INITIAL_STATE = null

export default function( state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_ROUTE:
            return action.payload.data;
        default:
            return state;
    }
}