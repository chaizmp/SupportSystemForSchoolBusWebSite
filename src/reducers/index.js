import { combineReducers } from 'redux';
import StudentsReducer from './reducer_students';
import ParentsReducer from './reducer_parents';
import TeachersReducer from './reducer_teachers';
import BusReducer from './reducer_bus';
import RouteReducer from './reducer_route';
import MemberReducer from './reducer_member';
import RelationshipReducer from './reducer_relationship';
import PersonReducer from './reducer_persons';
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
    persons: PersonReducer
});

export default rootReducer;