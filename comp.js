var paper = require('paper')
// paper.setup()

var project = new paper.Project()

console.log(new paper.Path.Rectangle(1,2,3,4).rotate(10).exportJSON())

// var path1 = new paper.Path({
//   segments: [[20, 20], [80, 80], [140, 20]],
//   fillColor: 'black',
//   closed: true
// })

// var path2 = new paper.Path({
//   segments: [[10, 10], [100, 100], [30, 40]],
//   fillColor: 'red',
//   closed: true
// })

// var circle = new paper.Path.Circle({
//   radius: 333,
//   fillColor: 'green'
// })

// var path = path2.unite(circle)

// // var compound = new paper.CompoundPath(path1, path2)
// // compound.fillColor = 'red'
// console.log(project)
// // console.log(compound.exportJSON())
