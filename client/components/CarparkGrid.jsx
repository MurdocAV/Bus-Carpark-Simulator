import React from 'react'
import CentralView from './CentralView'
import {HashRouter, Route} from 'react-router-dom'

// Using client side routing with React-router-dom

class CarparkGrid extends React.Component { 
  state = {
    grid: {
      '0': {}, '1': {}, '2': {}, '3': {}, '4': {}      
    }
  }

  resetGrid() {
    this.setState({
        grid: {
          '0': {}, '1': {}, '2': {}, '3': {}, '4': {}      
        }
      })
  }
  
  render () {
    return (
        <div onClick={() => this.createGrid()}>Grid Component</div>
      )
  }
}

export default CarparkGrid
