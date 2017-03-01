import paper from 'paper'

const _exportSVG = ({ PATH } = {}) => {
  paper.setup()
  var path = new paper.Path()
  path.importJSON(PATH)

  const svg = path.exportSVG({ asString: false, bounds: null }).getAttribute('d')
  return { SVG: svg }
}

export default _exportSVG
