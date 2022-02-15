import React, { Component } from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import MapStyle  from "./mapStyle.json";

const containerStyle = {
  width: '100%',
  height: '84vh'
 
};

class Map extends React.Component{
state =  {markers:[]};
          

componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        success => {
            this.setState({ view: {lat: success.coords.latitude, lng: success.coords.longitude}});
            console.log(this.state);
        },fail =>{ this.setState({ view:{ "lat": 49.2827,"lng":-123.1207 }})}
    );

    fetch('http://localhost/wwn/index.php/location/list?limit=20', {
    })
    .then(response => {
        return response.json();
    })
    .then(markers => {
        //console.log("markers" + data);
        this.setState({markers});
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}


  render() { 
    return (
        
    
      <LoadScript
        googleMapsApiKey="AIzaSyB0-ftuMjsHGds4c5TrWgEa7h6ilMfJye8"
      >

        <GoogleMap
         options={{
          streetViewControl: false,
          mapTypeControl: false,
          styles: MapStyle,
      }}
          mapContainerStyle={containerStyle}
          center={this.state.view}
          zoom={10}
        >
           
           {this.state.markers.map(location => {
          return (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
            />
          );
        })}

        </GoogleMap>
      </LoadScript>

      
    );
}
}

export default Map