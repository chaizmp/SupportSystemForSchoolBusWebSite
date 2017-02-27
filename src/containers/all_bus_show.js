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
        this.props.buses.map( (bus)=>{
            positions.push( {lat:bus.currentLatitude, lng:bus.currentLongitude});
            cenlat += bus.currentLatitude;
            cenlon += bus.currentLongitude;
        })
        return { route:positions, cenlat: cenlat/this.props.buses.length, cenlon: cenlon/this.props.buses.length };
    }


    render(){
        if(!this.props.buses){
            return <div> Loading . . .</div>
        }
        else {
            let {route, cenlat, cenlon} = this.getBusPositions();
            return (
                <div>
                    <tr>
                        <th> Map </th>
                        <th> Bus Data</th>
                    </tr>
                    <tr>
                        <td>
                            <GoogleMapCom
                                busPositions={route}
                                lat={cenlat}
                                lon={cenlon}
                            />
                        </td>
                        <td>
                                Car Number : {this.props.busId !== null? this.props.buses[this.props.busId]['carNumber'] : ''} <br/>
                                Average Velocity : {this.props.busId !== null? this.props.buses[this.props.busId]['avgVelocity'] :''} <br/>
                                Latitude : {this.props.busId !== null? this.props.buses[this.props.busId]['currentLatitude'] : ''} <br/>
                                Longitude : {this.props.busId !== null? this.props.buses[this.props.busId]['currentLongitude'] : ''} <br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">Back to Index</Link>
                        </td>
                    </tr>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return { buses:state.aboutBus.buses, busId:state.aboutBus.busId };
}

export default connect(mapStateToProps,{ fetchAllBus })(AllBusShow);