import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBus } from '../actions/index'
import { Link } from 'react-router';
import GoogleMapCom from '../components/google_map';
class AllBusShow extends Component {

    componentWillMount(){
        this.props.fetchAllBus()
            .then( ()=> {
                console.log(this.props.buses);
            })
    }

      getBusPositions() {
        let positions = [];
        let cenlat = 0;
        let cenlon = 0;
        let use = 0;
        this.props.buses.map( (bus,i)=>{
            if(bus.currentLatitude !== 200 && bus.crruentLongitude !== 200){
            positions.push( { carId:bus.carId, carNumber:bus.carNumber, id:i ,lat:bus.currentLatitude, lng:bus.currentLongitude});
            cenlat += bus.currentLatitude;
            cenlon += bus.currentLongitude;
            use++;
            }
        })
        if(use === 0){
            use++;
        }
        return { route:positions, cenlat: cenlat/use, cenlon: cenlon/use };
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

    renderStudents(students)  {
        return students.map( (student) => {
            return (
            <div key={student.id}>
                        Name: {student.firstName}&nbsp;{student.surName} <br/>
                        Tel: {student.tel} <br/>
                </div>
            );
        });
    }

    render(){
        if(!this.props.buses){
            return <div> Loading . . .</div>
        }
        else {
            let {route, cenlat, cenlon} = this.getBusPositions();
            return (
                <div>
                <table>
                    <tr>
                        <th> Bus Data</th>
                        <th> Map </th>
                       
                    </tr>
                    <tr>
                        <td style={{ width:'500px'}}>
                                {this.props.busId !== null? 'Car Number: '+this.props.buses[this.props.busId]['carNumber'] : ''} <br/>
                                
                                {this.props.busId !== null? 'Latitude: '+this.props.buses[this.props.busId]['currentLatitude'] : ''} <br/>
                                {this.props.busId !== null? 'Longitude: '+this.props.buses[this.props.busId]['currentLongitude'] : ''} <br/>
                                {!!this.props.driver ? this.renderDriver(this.props.driver):''}
                                {!!this.props.teachers ? this.renderTeachers(this.props.teachers):''}
                                {!!this.props.students ? <h3>Students</h3>:''}                        
                                {!!this.props.students ? this.renderStudents(this.props.students):''}
                        </td>
                        <td style={{width:'500px'}}>
                            <GoogleMapCom
                                allBusPositions={route}
                                lat={cenlat}
                                lon={cenlon}
                            />    
                        </td>
                    </tr>        
                </table>
                <button><Link style={{textDecoration:'none'}} to="/">Back to Index</Link></button> <br/>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return { buses:state.aboutBus.buses, busId:state.aboutBus.busId, teachers:state.aboutBus.teachers,
        students:state.aboutBus.students, driver:state.aboutBus.driver };
}

export default connect(mapStateToProps,{ fetchAllBus })(AllBusShow);

//{this.props.busId !== null? 'Average Velocity: '+this.props.buses[this.props.busId]['avgVelocity'] :''} <br/>