var paper = require('paper')
paper.setup()
console.log(new paper.Path().exportJSON())

const implementation = ({
                          APPLY_MATRIX = true,
                          CLOSED,
                          FILL_COLOR,
                          SEGMENTS,
                          STROKE_CAP,
                          STROKE_COLOR,
                          STROKE_WIDTH
                        } = {}) => {
  const ob = {
    applyMatrix: APPLY_MATRIX,
    closed: CLOSED,
    fillColor: FILL_COLOR,
    segments: SEGMENTS,
    strokeCap: STROKE_CAP,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH
  }
  const toReturn = Object.keys(ob)
    .filter(key => ob[key])
    .reduce((obj, key) => {
      obj[key] = ob[key]
      return obj
    }, {})

  return {
    PATH: ['Path', toReturn]
  }
}

console.log(implementation())
console.log(implementation({STROKE_COLOR: 'red'}))

// const fill = ({PATH, COLOR} = {}) => {
//   const ob = Object.assign({}, PATH.PATH[1], { 'fillColor': COLOR })
//   return {PATH: [PATH.PATH[0], ob]}
// }

// const path = ({SEGMENTS = [], STROKE_COLOR = [0, 0, 0]} = {}) => {
//   return {PATH: ['Path', {'applyMatrix': true, 'segments': SEGMENTS, 'strokeColor': STROKE_COLOR }]}
// }

// const log = obj => {
//   console.log(JSON.stringify(obj))
// }

// const basic = path({SEGMENTS: [[1, 1], [5, 5], [2, 2]]})
// const filled = fill({PATH: basic, COLOR: 'red'})
// log(basic)
// log(filled)

// var paper = require('paper')
// paper.setup()
// var project = new paper.Project()

// var ppath = new paper.Path()
// ppath.importJSON(filled.PATH)
// log(project.exportJSON())

// // console.log()

// // var path = new paper.Path()
// // path.strokeColor = 'black'
// // path.add([30, 30])
// // path.add([100, 100])
// // console.log(path.exportJSON())
