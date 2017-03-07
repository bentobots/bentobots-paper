var paper = require('paper')
paper.setup()
console.log(new paper.Path().exportJSON())

var path1 = new paper.Path({
  segments: [[20, 20], [80, 80], [140, 20]],
  fillColor: 'black',
  closed: true
})

var path2 = new paper.Path({
  segments: [[10, 10], [100, 100], [30, 40]],
  fillColor: 'red',
  closed: true
})

var compound = new paper.CompoundPath(path1, path2)
compound.fillColor = 'red'
console.log(compound.exportJSON())
