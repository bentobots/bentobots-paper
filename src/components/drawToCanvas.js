import paper from 'paper'

const implementation = ({ ELEMENT_ID, PATHS } = {}) => {
  var canvas = document.getElementById(ELEMENT_ID)
  paper.setup(canvas)
  project.importJSON(PATHS)
  paper.view.draw()
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
