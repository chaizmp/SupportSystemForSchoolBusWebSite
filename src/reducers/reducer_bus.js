import { FETCH_BUS, FETCH_BUSES, CLICK_BUS, FETCH_PASSENGERS } from '../actions/index';

const INITIAL_STATE = { bus: null, buses: [], busId: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_BUS:
            return { ...state, bus:action.payload.data};
        case FETCH_BUSES:
            return { ...state, buses:action.payload.data};
        case CLICK_BUS:
            return { ...state, busId:action.payload};
        case FETCH_PASSENGERS:
            return { ...state, teachers:action.payload.data.teachers, students:action.payload.data.students, driver:action.payload.data.driver};
        default:
            return state;
    }
}