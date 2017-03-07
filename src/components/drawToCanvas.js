import paper from 'paper'

const implementation = ({ CANVAS_ID, PATHS } = {}) => {
  var canvas = document.getElementById(CANVAS_ID)
  paper.setup(canvas)
  var path = new paper.Path()
  path.importJSON(PATHS)
  // paper.view.draw()
}

const spec = {
  name: 'Draw to canvas',
  description: 'draws to canvas',
  implementation,
  inputs: {
    ELEMENT: {}
  },
  outputs: {
  }
}

export default spec
