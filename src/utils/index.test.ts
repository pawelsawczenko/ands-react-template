import { describe, expect, test } from 'vitest'
import { getIndexFromUrl, stylizeIndex } from '.'

describe('Test for utils', () => {
  describe('Test for stylizeIndex function', () => {
    test('Should return "#0001" with 1 argument', () => {
      const result = stylizeIndex(1)
      expect(result).toEqual('#0001')
    })
    test('Should return "#0020" with 20 argument', () => {
      const result = stylizeIndex(20)
      expect(result).toEqual('#0020')
    })
    test('Should return "#0300" with 300 argument', () => {
      const result = stylizeIndex(300)
      expect(result).toEqual('#0300')
    })
    test('Should return "#1234" with 1234 argument', () => {
      const result = stylizeIndex(1234)
      expect(result).toEqual('#1234')
    })
  })
  describe('Test for getIndexFromUrl function', () => {
    test('Should return "6" with "https://pokeapi.co/api/v2/pokemon/6/" argument', () => {
      const result = getIndexFromUrl('https://pokeapi.co/api/v2/pokemon/6/')
      expect(result).toEqual('6')
    })
  })
})
