import React from 'react'
import CentralView from './CentralView'
import {HashRouter, Route} from 'react-router-dom'
import {place, move, left, right, report} from './commands'

// Using client side routing with React-router-dom

class CarparkGrid extends React.Component { 
  state = {
    grid: {
      x: null, y: null, f: null
    }
  }

  function place (x, y, f) {
    this.setState({
      grid: {
        x, y, f
      }
    })
  }  

  render () {
    return (
        <div>
          <form onsubmit="place()">
            <button onClick={handleSumbit}>PLACE</button><br/>
            <label for="x">X</label>
            <input type="number" id="x"/><br/>
            <label for="y">Y</label>
            <input type="number" id="y"/><br/>
            <label for="f"></label>
            <input type="radio" name="f" value="North"/> North<br/>
            <input type="radio" name="f" value="East"/> East<br/>
            <input type="radio" name="f" value="South"/> South<br/>
            <input type="radio" name="f" value="West"/> West<br/>
          </form>
          <button>MOVE</button>
          <button>LEFT</button>
          <button>RIGHT</button>
          <button>REPORT</button>
        </div>
      )
  }
}

export default CarparkGrid
