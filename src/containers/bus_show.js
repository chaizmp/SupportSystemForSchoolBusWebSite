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
                    Car Number: {bus.carNumber}
            </div>
        );
    }

    renderDriver(driver) {
        return (
            <div>
                <h3> Driver </h3>
                    Name: {driver.firstName}&nbsp;{driver.surName} <br/>
                    Tel: {driver.tel} <br/>
            </div>
        );
    }

    renderTeachers(teachers) {
        return teachers.map( (teacher) => {
            return (
                <div key={teacher.id}>
                    <h3> Teacher </h3>
                        Name: {teacher.firstName}&nbsp;{teacher.surName} <br/>
                        Tel: {teacher.tel} <br/>
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
                <GoogleMapCom
                    route={this.makeLatLngArray()}
                    lon={route[Math.floor((length-1)/2)]['longitude']}
                    lat={route[Math.floor((length-1)/2)]['latitude']}/>

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
                    <table>
                    <tr>
                        <th><h3>Bus Detail</h3></th>
                        <th><h3>Maps</h3></th>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center', width:'500px'}}>
                            {this.renderBus(bus)}
                            {this.renderDriver(driver)}
                            {this.renderTeachers(teachers)}
                        </td>
                         <td style={{textAlign: 'center', width: '1000px'}}>
                             {this.renderGoogleMaps()}
                         </td>  
                    </tr>  
                    </table>    
                    <br/><button><Link style={{textDecoration:'none'}} to={'/student/'+this.props.params.id}>&nbsp;Back to Student Detail&nbsp;</Link></button>&nbsp;
                    <button><Link style={{textDecoration:'none'}} to="/">&nbsp;Back to Index&nbsp;</Link></button>
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