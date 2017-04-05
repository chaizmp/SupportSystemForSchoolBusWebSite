import { combineReducers } from 'redux';
import StudentsReducer from './reducer_students';
import ParentsReducer from './reducer_parents';
import TeachersReducer from './reducer_teachers';
import BusReducer from './reducer_bus';
import RouteReducer from './reducer_route';
import MemberReducer from './reducer_member';
import RelationshipReducer from './reducer_relationship';
import PersonReducer from './reducer_persons';
import DeleteReducer from './reducer_delete';
import BusImageReducer from './reducer_bus_img';
import BusSpeedReducer from './reducer_bus_speed';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    students: StudentsReducer,
    teachers: TeachersReducer,
    parents: ParentsReducer,
    aboutBus: BusReducer,
    route: RouteReducer,
    formResult: MemberReducer,
    relationship: RelationshipReducer,
    form: formReducer,
    persons: PersonReducer,
    deleteResult: DeleteReducer,
    busImg: BusImageReducer,
    estimate: BusSpeedReducer
});

export default rootReducer;