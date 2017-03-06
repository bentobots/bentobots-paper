import paper from 'paper'

const implementation = ({ PATH, ONLYPATH = true } = {}) => {
  paper.setup()

  // var project = new paper.Project()
  // project.activeLayer.transform( new paper.Matrix(1,0,0,-1,200,150))

  var path = new paper.Path()
  path.importJSON(PATH)

  let svg
  if (ONLYPATH) {
    // const svg = path.exportSVG({ asString: false, bounds: null }).getAttribute('d')
    svg = path.getPathData()
  } else {
    svg = path.exportSVG({ asString: true, bounds: null })
  }

  return { SVG: svg }
}

const spec = {
  name: 'Export SVG',
  description: 'exports an svg',
  implementation,
  inputs: {
    PATH: {},
    ONLYPATH: {}
  },
  outputs: {
    SVG: {}
  }
}

export default spec
