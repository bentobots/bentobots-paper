import fill from './fill'
import path from './path'

it('fills a path with a color', () => {
  const origPath = path.implementation()
  let fillResult = fill.implementation({PATH: origPath.PATH, COLOR: 'red'})
  let expectedFillResult = {OUT: ['Path', {applyMatrix: true, fillColor: 'red'}]}
  expect(fillResult).toEqual(expectedFillResult)
  let anotherFillResult = fill.implementation({PATH: fillResult.OUT, COLOR: 'green'})
  expect(anotherFillResult).toEqual({OUT: ['Path', {applyMatrix: true, fillColor: 'green'}] })
})
