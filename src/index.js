/**
 * Extracts duplicates from given iterable.
 * Returns a Set of the found duplicates.
 * When deciding whether an element is a duplicate, the native
 * Set's equality is used (for performance reasons). This is value equality.
 * @example
 * // returns [1,2]
 * extractDuplicates([1,2,1,1,2,3])
 *
 * @param  {Iterable<*>} iterable
 * @return {Set<*>}
 */
module.exports = function extractDuplicates (iterable) {
  let set = new Set()
  let duplicates = new Set()

  for (let el of iterable) {
    if (set.has(el)) {
      duplicates.add(el)
    } else {
      set.add(el)
    }
  }

  return duplicates
}
