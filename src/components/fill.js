const implementation = ({PATH, COLOR} = {}) => {
  console.log(PATH)
  const ob = Object.assign({}, PATH[1], { 'fillColor': COLOR })
  return {OUT: [PATH[0], ob]}
}

const spec = {
  name: 'Fill Path',
  description: 'fills a path',
  implementation,
  inputs: {
    PATH: {},
    COLOR: {}
  },
  outputs: {
    OUT: {}
  }
}

export default spec
