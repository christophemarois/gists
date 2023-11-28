import { describe, test, expect } from 'bun:test'
import { mapSetGroupBy } from './mapSetGroupBy'

describe('mapSetGroupBy', () => {
  test('mixed element types work', () => {
    const x = mapSetGroupBy([1, 'a'], (el) => `${el}`)

    const expected = new Map([
      ['1', new Set<string | number>([1])],
      ['a', new Set<string | number>(['a'])],
    ])

    expect(x).toEqual(expected)
  })

  test('mixed key types work', () => {
    const x = mapSetGroupBy(
      [
        { name: 'Louis', age: 18 },
        { name: 'Jo', age: 19 },
        { name: 'Chris', age: 18 },
      ],
      (el) => el.age
    )

    const expected = new Map([
      [
        18,
        new Set([
          { name: 'Louis', age: 18 },
          { name: 'Chris', age: 18 },
        ]),
      ],
      [19, new Set([{ name: 'Jo', age: 19 }])],
    ])

    expect(x).toEqual(expected)
  })
})
