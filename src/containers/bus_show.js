import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBus, fetchRoute } from '../actions/index';
import GoogleMapCom from '../components/google_map';
import { Link } from 'react-router';
class ShowBus extends  Component{

    componentWillMount(){
        this.props.fetchBus(this.props.params.id)
            .then( ()=> {
                console.log(this.props.aboutBus);
            } );
        this.props.fetchRoute(this.props.params.id)
            .then( ()=> {
                console.log(this.props.route[0]);
            });
    }
    renderBus(bus) {
        return (
            <div>
                <h3> Bus </h3>
                <ul>
                    <li>Car Number : {bus.carNumber}</li>
                </ul>
            </div>
        );
    }

    renderDriver(driver) {
        return (
            <div>
                <h3> Driver </h3>
                <ul>
                    <li>First Name : {driver.firstName}</li>
                    <li>Surname : {driver.surName}</li>
                </ul>
            </div>
        );
    }

    renderTeachers(teachers) {
        return teachers.map( (teacher) => {
            return (
                <div key={teacher.id}>
                    <h3> Teacher </h3>
                    <ul>
                        <li>First Name : {teacher.firstName}</li>
                        <li>Surname : {teacher.surName}</li>
                    </ul>
                </div>
            );
        });
    };

    makeLatLngArray() {
         let latLngArr = [];
         this.props.route.map( (pos) => {
            latLngArr.push({lat:pos.latitude,lng:pos.longitude});
        });
         return latLngArr;
    }

    renderGoogleMaps(){
        var { route } = this.props;
        var length = route.length;
        return (
            <div>
                <h3> Maps </h3>
                <GoogleMapCom
                    route={this.makeLatLngArray()}
                    lon={route[(length-1)/2]['longitude']}
                    lat={route[(length-1)/2]['latitude']}/>

            </div>
        );
        // return (
        //     <div>
        //         <GoogleMapRender />
        //     </div>
        // );
    }

    render () {

        if (!this.props.aboutBus || !this.props.route)
            return <div> Loading . . . </div>;
        else if (this.props.aboutBus && this.props.route)
        {
            const {bus, driver, teachers} = this.props.aboutBus;
            return (
                <div>
                    <tr>
                        <th>Detail</th>
                        <th>Maps</th>
                    </tr>
                    <tr>
                        <td>
                            <h2>About Bus</h2>
                            {this.renderBus(bus)}
                            {this.renderDriver(driver)}
                            {this.renderTeachers(teachers)}
                        </td>
                        <td>
                            {this.renderGoogleMaps()}
                        </td>
                    </tr>
                    <Link to={'/student/'+this.props.params.id}>Back to Student Detail</Link><br/>
                    <Link to="/">Back to Index</Link>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        aboutBus: state.aboutBus.bus,
        route: state.route
    };
}



export default connect(mapStateToProps, {fetchBus, fetchRoute})(ShowBus);