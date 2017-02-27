import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import StudentsIndex from './containers/studentsIndex';
import StudentShow from './containers/student_show';
import BusShow from './containers/bus_show';
import BusesShow from './containers/all_bus_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StudentsIndex} />
        <Route path="student/:id" component={StudentShow} />
        <Route path="aboutBus/:id" component={BusShow} />
        <Route path="allBus" component={BusesShow} />
    </Route>
)