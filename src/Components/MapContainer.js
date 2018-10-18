import React from 'react';
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';
import {Router, Route} from 'react-router';



export class MapContainer extends React.Component {

  handleMarkerClick = (event) => {
    this.props.pullMarkerLocation(event)
  }
  handleMapClick = (x,y,z) => {
    const locationObj = {lat: z.latLng.lat(), lng: z.latLng.lng()}
    this.props.setMarkerLocation(locationObj)

  }
  render() {
    const style = {width: "60%",height: "100%"}
    // here, we'll cycle through the App's state of locations and map an array of
    // Marker components - placing the result inside of Map. The mapping should
    // place a key, name, and onClick method which will set state
    console.log(this.props.tempMarker)
    return (


        <Map
          google={this.props.google}
          zoom={14} style={style}
          onClick={this.handleMapClick}
          initialCenter={{lat: 40.704805199999996, lng: -74.0133346}}
        >
          <Marker name={'location_1'} onClick={this.handleMarkerClick} />
          {this.props.tempMarker.set ? <Marker name={"test"} position={this.props.tempMarker.location} onClick={this.handleMarkerClick} /> : null }
        </Map>




    )
  }

}

export default GoogleApiWrapper({
  apiKey: ("[ENTER YOUR GOOGLE API KEY HERE]")
})(MapContainer)


// {this.state.set ? <Marker position={this.state.temporaryMarker} /> : null }