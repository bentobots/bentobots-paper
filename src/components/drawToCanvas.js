import paper from 'paper'

const implementation = ({ CANVAS_ID, PATHS } = {}) => {
  var canvas = document.getElementById(CANVAS_ID)
  paper.setup(canvas)
  let path
  if (PATHS[0] && Array.isArray(PATHS[0])) {
    console.log('MULTI', PATHS)
    PATHS.map(PATH => {
      path = new paper.Path()
      path.importJSON(PATH)
    })
  } else {
    console.log('SINGLE', PATHS)
    path = new paper.Path()
    path.importJSON(PATHS)
  }
  // paper.view.draw()
}

const spec = {
  name: 'Draw to canvas',
  description: 'draws to canvas',
  implementation,
  inputs: {
    PATHS: {},
    CANVAS_ID: {}
  },
  outputs: {
  }
}

export default spec
