import paper from 'paper'

const rectangle = ({ X = 0, Y = 0, WIDTH = 1, HEIGHT = 1 } = {}) => {
  paper.setup()
  const rect = new paper.Path.Rectangle(X, Y, WIDTH, HEIGHT)
  return { RECTANGLE: rect.exportJSON() }
}

export default rectangle
