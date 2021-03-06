import React from 'react';
import {Map,Marker,GoogleApiWrapper,HeatmapLayer} from 'google-maps-react';
import {Router, Route} from 'react-router';




export class MapContainer extends React.Component {

  handleMarkerClick = (event) => {
    console.log(event)
    if (event.name !== "temporaryMarker") {
      this.props.pullMarkerLocation(event.id)
    }
  }

  handleMapClick = (x,y,z) => {
    const locationObj = {lat: z.latLng.lat(), lng: z.latLng.lng()}
    this.props.setMarkerLocation(locationObj)
  }

  render() {
    const marker = this.props.mapData.map((point) => {

      return <Marker name={point.title} key={point.id} id={point.id} position={{lat: point.latitude ,lng: point.longitude}} onClick={this.handleMarkerClick} />
        })

    return (


        <Map
          google={this.props.google}
          zoom={14}
          onClick={this.handleMapClick}
          initialCenter={{lat: 40.704805199999996, lng: -74.0133346}}
        >

          {marker}
          {this.props.tempMarker.set ? <Marker name={"temporaryMarker"} position={this.props.tempMarker.location} onClick={this.handleMarkerClick} /> : null }
        </Map>




    )
  }

}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
})(MapContainer)
