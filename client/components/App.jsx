import React from 'react'
import CentralView from './CentralView'
import {HashRouter, Route} from 'react-router-dom'

// Using client side routing with React-router-dom

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Route exact path="/" component={CentralView} />
      </HashRouter>
    )
  }
}

export default App
