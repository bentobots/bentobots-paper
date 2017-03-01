import rectangle from './rectangle'
import _exportSVG from './exportSVG'

it('can exportSVG', () => {
  const rect = rectangle({X: 2, Y: 2, WIDTH: 20, HEIGHT: 50}).RECTANGLE
  const result = _exportSVG({ PATH: rect })
  expect(result).toEqual({SVG: 'M2,52l0,-50l20,0l0,50z'})
})
