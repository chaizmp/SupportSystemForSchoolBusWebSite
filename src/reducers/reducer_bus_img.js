import { FETCH_BUS_IMAGES } from '../actions/index';

const INITIAL_STATE = {imageFront:'-1', imageBack:'-1'};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_BUS_IMAGES:
            return {...state, imageFront:action.payload.data.imageFront, imageBack:action.payload.data.imageBack};
        default:
            return state;
    }
}