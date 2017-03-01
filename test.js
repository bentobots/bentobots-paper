var paper = require('paper')

var project = new paper.Project()

const width = 300
const height = 250
const w = width * 100
const h = height * 100
new paper.Point(0, h)
new paper.Point(w / 2, h * 0.6)
new paper.Point(w / 2, 0)
new paper.Point(-w / 2, 0)
new paper.Point(-w / 2, h * 0.6)

var rect = new paper.Path.Rectangle(10, 10, 20, 30)
console.log(rect.getPathData())
var rect2 = new paper.Path.Rectangle(50, 50, 10, 10)
console.log(rect2.getPathData())

const connectPoints = (points, strokeWidth = 1, strokeColor = '#000', closePath = true) => {
  let shape = new paper.Path()
  shape.moveTo(points[0])
  for (var i = 1; i < points.length; i++) {
    shape.lineTo(points[i])
  }
  if (closePath) { shape.closePath() }
  return shape
}

// console.log(project.exportJSON())
// console.log(project.exportSVG({asString: true}))
