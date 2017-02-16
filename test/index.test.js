import test from 'ava'
import extractDuplicates from '../src'

test('should work given a non-array Iterable', t => {
  let iterable = {}
  iterable[Symbol.iterator] = function* () {
    yield 1
    yield 1
    yield 2
  }

  t.deepEqual(Array.from(extractDuplicates(iterable)), [1])
})

test('given [] gives no duplicates', t => {
  t.is(extractDuplicates([]).size, 0)
})

test('should return only one of the duplicates', t => {
  t.deepEqual(Array.from(extractDuplicates(['id1', 'id2', 'id1', 'id1'])), ['id1'])
  let set = extractDuplicates(['id1', 'id2', 'id1', 'id2'])
  t.is(set.size, 2)
  t.true(set.has('id1'))
  t.true(set.has('id2'))
})

test('should return an empty Set when there are no duplicates', t => {
  t.deepEqual(Array.from(extractDuplicates(['id1', 'id2', 'id3', 'id4'])), [])
})

test('should not affect the given iterable', t => {
  let b = ['id1', 'id2', 'id1', 'id1']
  extractDuplicates(b)
  t.deepEqual(b, ['id1', 'id2', 'id1', 'id1'])
})

test('should not return a referance to the input Set (an iterable) if output Set happens to have the same elements - i.e. should return a new Set', t => {
  let a = new Set()
  t.not(extractDuplicates(a), a)
})

test('sample data', t => {
  let arr = [
    'item_id1',
    'item_id1',
    'item_id2',
    'item_id3',
    'itemInstance_id1',
    'itemInstance_id2',
    'itemInstance_id3',
    'itemInstance_id4',
    'itemInstance_id5'
  ]
  t.deepEqual(Array.from(extractDuplicates(arr)), ['item_id1'])
})
