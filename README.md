# extract-duplicates

Extracts duplicates from the given [Iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators). Returns a Set of the found duplicates. When deciding whether an element is a duplicate, the native Set's equality is used (for performance reasons). This is value equality.

# Install

`npm i @justinc/extract-duplicates`

# Examples

```js
const extractDuplicates = require('@justinc/extract-duplicates')

extractDuplicates([1,2,1,1,2,3])
// Set { 1, 2 }
```
