import path from './path'

it('can create a path', () => {
  const result = path.implementation()
  expect(result).toEqual({PATH: ['Path', { applyMatrix: true }]})
})

it('can create a path with a fill color', () => {
  const result = path.implementation({FILL_COLOR: 'green'})
  expect(result).toEqual({PATH: ['Path', { applyMatrix: true, fillColor: 'green' }]})
})

it('ignores keys not on whitelist', () => {
  const result = path.implementation({HELLO: 'World'})
  expect(result.PATH.HELLO).toEqual(undefined)
})
