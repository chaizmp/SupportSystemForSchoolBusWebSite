import { combineReducers } from 'redux';
import StudentsReducer from './reducer_students';
import ParentsReducer from './reducer_parents';
import TeachersReducer from './reducer_teachers';
import BusReducer from './reducer_bus';
import RouteReducer from './reducer_route';

const rootReducer = combineReducers({
    students: StudentsReducer,
    teachers: TeachersReducer,
    parents: ParentsReducer,
    aboutBus: BusReducer,
    route: RouteReducer
});

export default rootReducer;