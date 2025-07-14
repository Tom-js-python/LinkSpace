import { describe, it, expect } from 'vitest'

import { evenOrOdd } from '../evenOrOdd'

describe('basic math', () => {
  it('adds two number', () => {
    expect(1 + 1).toEqual(2)
  })

  describe('evenOrOdd', () => {
    it('indicates the number is even', () => {
      expect(evenOrOdd(4)).toBe('Even')
    })
  })
})
