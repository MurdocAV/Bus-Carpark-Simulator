import React from 'react'

class BusLocation extends React.Component { 

  render () {

    const returnText = () => {
      // console.log(this.props.location)
      if (this.props.location.x === null || this.props.location.y === null || this.props.location.f === null) {
        return "Please place the bus in the carpark."
      } else {
        return `Bus is at the location (${this.props.location.x}, ${this.props.location.y}). Facing ${this.props.location.f}.`
      }
    }

    return (
      returnText()
      )
  }
}

export default BusLocation
