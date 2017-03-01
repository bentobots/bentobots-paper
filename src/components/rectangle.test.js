import rectangle from './rectangle'

it('creates a rectangle with values', () => {
  const result = rectangle({X: 2, Y: 3})
  expect(result).toEqual({RECTANGLE: '["Path",{"applyMatrix":true,"segments":[[2,4],[2,3],[3,3],[3,4]],"closed":true}]' })
})
