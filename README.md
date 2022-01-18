# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eze1er/lotide`

**Require it:**

`const _ = require('@eze1er/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: which returns the first item in the array.
* `tail()`: which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle()`: The middle function should return an array with only the middle element(s) of the provided array
* `countOnly()`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `countLetters()`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions()`: function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

* `findKeyByValue()`: function which takes in an object and a value. It should scan the object and return the first key which contains the given value

*`map(array, callback)`: The function will return a new array based on the results of the callback function.

* `takeUntil(array, callback)`: Function which will keep collecting items from a provided array until the callback provided returns a truthy value.
  
* `findKey(obj, callback)`: Function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

