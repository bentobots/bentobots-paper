var paper = require('paper')
paper.setup()
var project = new paper.Project()

var point = new paper.Point(10,10)
var point2 = new paper.Point(20,10)

console.log(point.exportJSON())

var line = new paper.Rectangle(point, point2)
line.fillColor = 'red'

var rect = new paper.Path.Rectangle(10, 10, 20, 30)
// console.log(rect.getPathData())

// console.log(project.exportJSON())

var path = new paper.Path()

// console.log(path.importJSON(["Point",10,10],["Point",20,10]))

var path = new paper.Path()
path.strokeColor = 'black'
path.add([30, 30])
path.add([100, 100])
console.log(path.exportJSON())


// [
//   ["Layer", {
//     "applyMatrix": true,
//     "children": [
//       ["Path", {
//         "applyMatrix": true,
//         "segments": [
//           [10, 40],
//           [10, 10],
//           [30, 10],
//           [30, 40]
//         ],
//         "closed": true
//       }]
//     ]
//   }]
// ]
