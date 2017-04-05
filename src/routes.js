import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './components/login';
import Register from './components/register';
import StudentsIndex from './containers/studentsIndex';
import StudentShow from './containers/student_show';
import BusShow from './containers/bus_show';
import PersonShow from './containers/person_show';
import BusesShow from './containers/all_bus_show';
import Relationship from './containers/relationship'
import Delete from './components/delete';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="register" component ={Register} />
        <Route path="relationship" component ={Relationship} />
        <Route path="index" component={StudentsIndex} />
        <Route path="delete" component={Delete} />
        <Route path="/person/:id" component={PersonShow} />
        <Route path="/student/:id" component={StudentShow} />
        <Route path="/aboutBus/:id" component={BusShow} />
        <Route path="/allBus" component={BusesShow} />
    </Route>
)