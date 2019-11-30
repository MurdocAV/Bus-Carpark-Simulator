import React from "react";
import CarparkGrid from './CarparkGrid'

class CentralView extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* <img className="profilePhoto" src="https://via.placeholder.com/185" alt="Photo of a developer #KanyeWest2024"/> */}
        <CarparkGrid></CarparkGrid>
      </React.Fragment>
    )
  }
}

export default CentralView