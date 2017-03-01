import rectangle from './rectangle'
import fill from './fill'

it('fills a path with a color', () => {
  const rect = rectangle({X: 2, Y: 3}).RECTANGLE
  const result = fill({PATH: rect, COLOR: 'red'})
  expect(result).toEqual({PATH: '["Path",{"applyMatrix":true,"segments":[[2,4],[2,3],[3,3],[3,4]],"closed":true,"fillColor":[1,0,0]}]' })
})
