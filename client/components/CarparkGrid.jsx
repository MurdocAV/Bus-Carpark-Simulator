import React from 'react'
import CentralView from './CentralView'
import {HashRouter, Route} from 'react-router-dom'
import {place, move, left, right, report} from './commands'
import { nullLiteral } from '@babel/types'
import BusLocation from './BusLocation'

// Using client side routing with React-router-dom

class CarparkGrid extends React.Component { 
  state = {
    x: null,
    y: null,
    f: null,
    userX: 0,
    userY: 0,
    userF: "North",
    report: ""
  }

  changeHandler(label, event) {
    this.setState({[label]: event.target.value})
  }

  handlePlace() {
    const {userX, userY, userF} = this.state
    this.setState({
      x: userX,
      y: userY,
      f: userF
    })
  }

  // Checks if anything is null in the data. Used to ensure that a placement has been done before other actions.
  checkPlacement() {
    if (this.state.x === null || this.state.y === null || this.state.f === null) {
      return true
    } else {
      return false
    }
  }

  handleMove () {
    const {x, y} = this.state
    const direction = this.state.f

    if (this.checkPlacement()) {
      return
    }

    switch(direction) {
      case "North":
        if (direction === "North" && y != 4 )
          this.setState({y: Number(y) + 1})
        else
          console.log(`You can't go any more north traveller.`)
        break;
      case "South":
        if (direction === "South" && y != 0 )
          this.setState({y: Number(y) - 1})
        else
          console.log(`You can't go any more south traveller.`)
        break;
      case "East":
        if (direction === "East" && x != 4 )
          this.setState({x: Number(x) + 1})
        else
          console.log(`You can't go any more east traveller.`)
        break;
      case "West":
        if (direction === "West" && x != 0 )
          this.setState({x: Number(x) - 1})
        else
          console.log(`You can't go any more west traveller.`)
        break;
    }
  }

  handleLeft () {
    const direction = this.state.f

    if (this.checkPlacement()) {
      return
    }

    switch(direction) {
      case "North":
        this.setState({f: "West"})
        break;
      case "South":
        this.setState({f: "East"})
        break;
      case "East":
        this.setState({f: "North"})
        break;
      case "West":
        this.setState({f: "South"})
        break;
    }
  }

  handleRight () {
    const direction = this.state.f

    if (this.checkPlacement()) {
      return
    }

    switch(direction) {
      case "North":
        this.setState({f: "East"})
        break;
      case "South":
        this.setState({f: "West"})
        break;
      case "East":
        this.setState({f: "South"})
        break;
      case "West":
        this.setState({f: "North"})
        break;
    }
  }

  handleReport () {
    this.setState({report: "You're already getting a live report -_-"})
  }

  render () {
    return (
        <div>
            <label htmlFor="x">X (0 - 4)</label>
              <input 
              type="number"
              id="x"
              onChange={(e) => this.changeHandler('userX', e)}
              /><br/>
            <label htmlFor="y">Y (0 - 4)</label>
              <input 
                type="number"
                id="y"
                onChange={(e) => this.changeHandler('userY', e)}
                /><br/>
            <br></br>
            <input type="radio" name="f" value="North"
             onChange={(e) => this.changeHandler('userF', e)}
            /> North<br/>
            <input type="radio" name="f" value="East"
              onChange={(e) => this.changeHandler('userF', e)}
            /> East<br/>
            <input type="radio" name="f" value="South"
              onChange={(e) => this.changeHandler('userF', e)}
            /> South<br/>
            <input type="radio" name="f" value="West"
              onChange={(e) => this.changeHandler('userF', e)}
            /> West<br/><br/>
          <button onClick={() => this.handlePlace()}>PLACE</button><br/><br/>
          <button onClick={() => this.handleMove()}>MOVE</button>
          <button onClick={() => this.handleLeft()}>LEFT</button>
          <button onClick={() => this.handleRight()}>RIGHT</button>
          <button onClick={() => this.handleReport()}>REPORT</button>
          <br/><br/>
          <BusLocation location={this.state}/>
          <p>{this.state.report}</p>
        </div>
      )
  }
}

export default CarparkGrid
