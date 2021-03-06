import React from 'react';
import SnitchForm from './Form'
import Details from './Details'

export default class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const markerData = this.props.mapData.find((map) => {
      return map.id == this.props.selectedLocation
    })
    // console.log(markerData)
    return (
      <div>
        {this.props.display ?
          <Details
            handleCommentSubmit = {this.props.handleCommentSubmit}
            markerData={markerData}
            handleFormChange={this.props.handleFormChange}
            formValues={this.props.formValues}
            comments={this.props.comments}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
          />
          :
          <SnitchForm
            handleInputSubmit={this.props.handleInputSubmit} handleFormChange={this.props.handleFormChange} formValues={this.props.formValues}
            tempMarker={this.props.tempMarker.location} />

        }
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}
