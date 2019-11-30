import React from 'react'
import { shallow } from 'enzyme'
import App from '../client/components/App'

App.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

// Snapshot testing needs to make sure that the bus app doesn't get changed unexpectedly.
describe('App', () => {
  it('App should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />)
    expect(component).toMatchSnapshot()
  })
})