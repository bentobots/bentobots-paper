import {Point} from 'paper'

const point = ({ X = 0, Y = 0 } = {}) => {
  return { POINT: new Point(X, Y) }
}

export default point
