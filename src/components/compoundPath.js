const implementation = ({
    CHILDREN = [],
    FILL_COLOR = 'black'
  } = {}) => {
  const ob = {
    children: CHILDREN,
    fillColor: FILL_COLOR
  }
  const toReturn = {
    applyMatrix: true,
    children: CHILDREN,
    fillColor: FILL_COLOR
  }
  return {
    PATH: ['CompoundPath', toReturn]
  }
}

const spec = {
  name: 'Creates a compound path',
  description: 'joins paths together',
  implementation,
  inputs: {
    CHILDREN: {},
    FILL_COLOR: {}
  },
  outputs: {
    PATH: {}
  }
}

export default spec
