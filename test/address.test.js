var Address = require('../lib/address')
  , conv = require('convert-hex')

require('terst')

describe('Address', function() {
  describe('> when a the result of the sha256 ripemd160 is input', function() {
    it('should create the bitcoin address', function() {
      var hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"
      var address = new Address(conv.hexToBytes(hash160), 'prod') //'testnet is also valid'
      EQ (address.toString(), "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS")
    })
  })
})




