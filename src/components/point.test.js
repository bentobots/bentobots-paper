import {Point} from 'paper'
import point from './point'

it('creates a point with values', () => {
  const result = point({X: 2, Y: 3})
  expect(result).toEqual({POINT: new Point(2, 3)})
  // expect(result).toEqual({POINT: ["Point", 2, 3]})
})
