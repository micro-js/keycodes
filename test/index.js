/**
 * Imports
 */

var keycodes = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(Object.keys(keycodes).length, 42 + 26 + 10 + 12 + 10)
  t.end()
})
