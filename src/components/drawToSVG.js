import React from 'react'
import paper from 'paper'
import caster from 'svg-path-bounding-box'

const implementation = ({ PATHS, UNITE = true } = {}) => {
  return { PARSED_PATHS: PATHS }
}

// class UI extends React.Component {
//   constructor (props) {
//     super(props)
//     this.divID = `${this.props.id}-div`
//   }
//   componentDidUpdate (prevProps, prevState) {
//     paper.setup()
//     var project = new paper.Project()
//     let path
//     const PATHS = this.props.outputs.PARSED_PATHS
//     if (PATHS[0] && Array.isArray(PATHS[0])) {
//       PATHS.map(PATH => {
//         // path = new paper.Path()
//         path = new paper[PATH[0]]()
//         project.importJSON(PATH)
//       })
//     } else {
//       // path = new paper.Path()
//       path = new paper[PATHS[0]]()
//       path.importJSON(PATHS)
//     }
//     console.log(">>>", project.exportSVG())
//     document.getElementById(this.divID).innerHTML = project.exportSVG({asString: true})
//   }
//   render () {
//     return (<div id={this.divID} style={{width: 300, height: 300}}></div>)
//   }
// }

class UI extends React.Component {
  constructor (props) {
    super(props)
    this.divID = `${this.props.id}-div`
  }
  componentDidUpdate (prevProps, prevState) {
    paper.setup()
    let path
    const PATHS = this.props.outputs.PARSED_PATHS
    if (PATHS[0] && Array.isArray(PATHS[0])) {
    } else {
      path = new paper[PATHS[0]]()
      path.importJSON(PATHS)
      //  transform="scale(35.43307)"
      const svg = `<?xml version="1.0" encoding="utf-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${caster(path.getPathData()).toString()}">
        <g fill="#000"><path d="${path.getPathData()}"></path></g>
      </svg>`
      document.getElementById(this.divID).innerHTML = svg
    }
  }
  render () {
    return (<div id={this.divID} style={{width: 300, height: 300}}></div>)
  }
}


const spec = {
  name: 'Draw to SVG',
  description: 'draws to SVG',
  implementation,
  ui: {
    component: <UI />
  },
  inputs: {
    PATHS: {}
  },
  outputs: {
    PARSED_PATHS: {}
  }
}

export default spec
