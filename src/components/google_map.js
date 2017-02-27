import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Polyline, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { clickBus } from '../actions/index';
class GoogleMapCom extends Component {
    render() {
        return (
            <GoogleMapLoader
                containerElement={ <div style={{height: '300px', width: '300px'}}/> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}}>
                        {this.props.route ? <Polyline
                                path={this.props.route}
                                fillColor={'#FFFF00'}
                                strokeOpacity={1.0}
                                strokeWeight={1}
                                fillOpacity={2}
                            /> : ''}
                        {this.props.route ? this.props.route.map((marker) => {
                                return <Marker
                                    position={marker}
                                />;
                            }) : ''}
                        {this.props.busPositions ? this.props.busPositions.map((marker,i) => {
                                return <Marker onClick={ ()=>{this.props.clickBus(i)} }
                                               position={marker}
                                />;
                            }) : ''}
                    </GoogleMap>
                }
            />
        );
    }
}

export default connect(null, { clickBus })(GoogleMapCom)
