var Address = require('../lib/address'),
  binConv = require('binstring');

require('terst');

describe('Address', function() {
  describe('> when a the result of the sha256 ripemd160 is input', function() {
    it('should create the bitcoin address', function() {
      var hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"
      var address = new Address(binConv(hash160, { in : 'hex',
        out: 'bytes'
      }), 'mainnet', 'Pubkeyhash') //'testnet is also valid'
      EQ(address.toString(), "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS")
    })
  })

  describe(' - Address.validate()', function() {
    it(' > supports pubkey hash addresses', function() {
      // default to mainnet
      // addresses for hash160: 0000000000000000000000000000000000000000
      T(Address.validate('1111111111111111111114oLvT2'))
      F(Address.validate('1111111111111111111114oLvT2', 'testnet'))

      F(Address.validate('mfWxJ45yp2SFn7UciZyNpvDKrzbhyfKrY8'))
      T(Address.validate('mfWxJ45yp2SFn7UciZyNpvDKrzbhyfKrY8', 'testnet'))
    })

    it(' > supports Scripthash addresses', function() {
      // default to mainnet
      // addresses for hash160: 0000000000000000000000000000000000000000
      T(Address.validate('31h1vYVSYuKP6AhS86fbRdMw9XHieotbST'))
      F(Address.validate('31h1vYVSYuKP6AhS86fbRdMw9XHieotbST', 'testnet'))

      F(Address.validate('2MsFDzHRUAMpjHxKyoEHU3aMCMsVtMqs1PV'))
      T(Address.validate('2MsFDzHRUAMpjHxKyoEHU3aMCMsVtMqs1PV', 'testnet'))
    })
  })

  describe(' - Address.getType()', function() {
    it(' > supports pubkeyhash addresses', function() {
      var address = new Address('1111111111111111111114oLvT2')
      EQ(address.getType(), 'Pubkeyhash')
      var address = new Address('mfWxJ45yp2SFn7UciZyNpvDKrzbhyfKrY8', 'testnet')
      EQ(address.getType('testnet'), 'Pubkeyhash')
    })

    it(' > supports Scripthash addresses', function() {
      var address = new Address('31h1vYVSYuKP6AhS86fbRdMw9XHieotbST')
      EQ(address.getType(), 'Scripthash')
      var address = new Address('2MsFDzHRUAMpjHxKyoEHU3aMCMsVtMqs1PV', 'testnet')
      EQ(address.getType('testnet'), 'Scripthash')
    })
  })

  describe(' - Setting DefaultNetwork', function() {
    it(' > returns the right address given default newtork', function() {
      var hash160 = '0000000000000000000000000000000000000000'
      var bytes = binConv(hash160, { in : 'hex',
        out: 'bytes'
      })

      Address.defaultNetwork = 'mainnet';
      var address = new Address(bytes)
      // https://blockchain.info/address/1111111111111111111114oLvT2
      EQ(address.toString(), '1111111111111111111114oLvT2')

      Address.defaultNetwork = 'testnet';
      var address = new Address(bytes)
      // https://helloblock.io/testnet/addresses/mfWxJ45yp2SFn7UciZyNpvDKrzbhyfKrY8
      EQ(address.toString(), 'mfWxJ45yp2SFn7UciZyNpvDKrzbhyfKrY8')
    });
  })
})
