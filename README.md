# Install

`npm i @justinc/extract-duplicates`

<a name="extractDuplicates"></a>

## extractDuplicates(iterable) ⇒ <code>Set.&lt;\*&gt;</code>
Extracts duplicates from given iterable.
Returns a Set of the found duplicates.
When deciding whether an element is a duplicate, the native
Set's equality is used (for performance reasons). This is value equality.

**Kind**: global function  

| Param | Type |
| --- | --- |
| iterable | <code>Iterable.&lt;\*&gt;</code> | 

**Example**  
```js
const extractDuplicates = require('@justinc/extract-duplicates')
extractDuplicates([1,2,1,1,2,3])
// Set { 1, 2 }
```
