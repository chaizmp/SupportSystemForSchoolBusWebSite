import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Polyline, Marker} from 'react-google-maps';
import { connect } from 'react-redux';
import { clickBus, fetchAllPassenger } from '../actions/index';
class GoogleMapCom extends Component {

    render() {
        console.log("######");
        console.log(this.props.lat, this.props.lon);
        return (
            <GoogleMapLoader
                containerElement={ <div style={{ border: 'ridge', borderColor: 'grey', height: `${this.props.height}`, width: `${this.props.width}`}}/> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}}>
                        {this.props.route ? <Polyline
                                path={this.props.route}
                                fillColor={'#FFFF00'}
                                strokeOpacity={1.0}
                                strokeWeight={1}
                                fillOpacity={2}
                            /> : ''}
                        {this.props.route ? this.props.route.map((marker,i) => {
                                return <Marker key={i}
                                    position={marker}
                                />;
                            }) : ''}
                        {this.props.busPositions ? this.props.busPositions.map((marker,i) => {
                                return <Marker key={i} onClick={ ()=>{this.props.clickBus(i)} }
                                               position={marker}
                                               label={i===0?'START':''}
                                />;
                            }) : ''}
                        {this.props.allBusPositions ? this.props.allBusPositions.map((marker,i) => {
                                return <Marker key={i} onClick={ ()=>{
                                    this.props.clickBus(marker.id);
                                    this.props.fetchAllPassenger(marker.carId);
                                } }
                                               position={marker}
                                               label={marker.carNumber}
                                />;
                            }) : ''}    
                    </GoogleMap>
                }
            />
        );
    }
}

export default connect(null, { clickBus, fetchAllPassenger })(GoogleMapCom)
