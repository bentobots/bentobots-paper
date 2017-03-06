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

const spec = {
  name: 'Create Path',
  description: 'creates a path',
  implementation,
  inputs: {
    APPLY_MATRIX: {},
    CLOSED: {},
    FILL_COLOR: {},
    SEGMENTS: {},
    STROKE_CAP: {},
    STROKE_COLOR: {},
    STROKE_WIDTH: {}
  },
  outputs: {
    PATH: {}
  }
}

export default spec
