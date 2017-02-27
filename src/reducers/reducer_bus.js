import { FETCH_BUS, FETCH_BUSES, CLICK_BUS } from '../actions/index';

const INITIAL_STATE = { bus: null, buses: null, busId: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_BUS:
            return { ...state, bus:action.payload.data};
        case FETCH_BUSES:
            return { ...state, buses:action.payload.data};
        case CLICK_BUS:
            return { ...state, busId:action.payload};
        default:
            return state;
    }
}