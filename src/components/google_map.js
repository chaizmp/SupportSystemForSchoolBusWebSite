import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Polyline, Marker} from 'react-google-maps';
import { connect } from 'react-redux';
import { clickBus, fetchAllPassenger } from '../actions/index';
class GoogleMapCom extends Component {

    render() {
        return (
            <GoogleMapLoader
                containerElement={ <div style={{ border: 'ridge', borderColor: 'grey', height: `${this.props.height}`, width: `${this.props.width}`}}/> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}}>
                        {this.props.route ? <Polyline
                                path={this.props.route}
                                strokeColor="#FFFF00"
                                strokeOpacity={1.0}
                                strokeWeight={1}
                                fillOpacity={2}
                            /> : ''}
                        {this.props.route ? this.props.route.map((marker,i) => {
                                let text;
                                if(i == 0){
                                    text = 'Start';
                                }
                                else if(i == this.props.route.length-1){
                                    text = 'Current';
                                }
                                else{
                                    text = ''
                                }
                                return <Marker key={i}
                                    position={marker}
                                    strokeColor="#FFFF00"
                                    label={text}
                                />;
                            }) : ''}
                        {this.props.busPositions ? this.props.busPositions.map((marker,i) => {
                                return <Marker key={i} onClick={ ()=>{this.props.clickBus(i)} }
                                               position={marker}
                                               label={i==0?'START':''}
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
