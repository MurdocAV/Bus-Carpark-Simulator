import React from 'react'
import {shallow} from 'enzyme'
import App from '../client/components/App'
import CarparkGrid from '../client/components/CarparkGrid'

// Testing principals!
  // Arrange => Test data and variables.
  // Act => Calling the function we're testing.
  // Assert => Checking if you got the right result.

test('Existance of a 5x5 grid.', () => {
// Doing with a 5 rows of objects to represent a 5x5 grid to allow easier transition into a real display rather than console based output
  
  // Arrange
  const expected = {
    '0': {}, '1': {}, '2': {}, '3': {}, '4': {}
  }

  const wrapper = shallow(CarparkGrid)
  

  //Act

  
})

// test('Ability to place a bus in an existing 5x5 grid.')