import paper from 'paper'

const _fill = ({PATH, COLOR = 'black'} = {}) => {
  paper.setup()
  var path = new paper.Path()
  path.importJSON(PATH)
  path.fillColor = COLOR
  return { PATH: path.exportJSON() }
}

export default _fill
