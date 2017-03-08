import React from 'react'
import paper from 'paper'

const implementation = ({ PATHS, UNITE = true } = {}) => {
  return { PARSED_PATHS: PATHS }
}

class UI extends React.Component {
  constructor (props) {
    super(props)
    this.canvasID = `${this.props.id}-canvas`
  }
  componentDidUpdate (prevProps, prevState) {
    paper.setup(this.canvasID)
    // var project = new paper.Project()

    let path
    const PATHS = this.props.outputs.PARSED_PATHS
    if (PATHS[0] && Array.isArray(PATHS[0])) {
      PATHS.map(PATH => {
        // path = new paper.Path()
        path = new paper[PATH[0]]()
        project.importJSON(PATH)
      })
    } else {
      // path = new paper.Path()
      path = new paper[PATHS[0]]()
      path.importJSON(PATHS)
    }
  }
  render () {
    return (<div>
      <canvas id={this.canvasID} width={300} height={300} />
    </div>)
  }
}

const spec = {
  name: 'Draw to canvas',
  description: 'draws to canvas',
  implementation,
  ui: {
    component: <UI state={{id: 'canvas'}} />
  },
  inputs: {
    PATHS: {}
  },
  outputs: {
    PARSED_PATHS: {}
  }
}

export default spec
