!function(globals) {
'use strict'


//*** UMD BEGIN
if (typeof define !== 'undefined' && define.amd) { //require.js / AMD
  define(['cryptocoin-bigint'], function(_BigInteger) {
    BigInteger = _BigInteger
    return base58
  })
} else if (typeof module !== 'undefined' && module.exports) { //CommonJS
  try { //Node.js
    BigInteger = require('cryptocoin-bigint')
  } catch (e) { //Component
    BigInteger = require('bigint')
  }
  module.exports = base58
} else {
  BigInteger = globals.BigInteger
  globals.base58 = base58
}
//*** UMD END



}(this);