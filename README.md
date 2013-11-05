Bitcoin Address
===============

JavaScript component to handle Bitcoin addresses.

AMD/CommonJS compatible.

See this article for more details: [bitcoin address](http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript).

See for more modifications: https://github.com/vbuterin/bitcoinjs-lib/blob/master/src/address.js


Install
-------

### Node.js/Browserify

    npm install --save cryptocoin-address-btc

### Component

    component install cryptocoinjs/address-btc


### Bower

    bower install cryptocoin-address-btc


### Script

```html
<script src="/path/to/address-btc.js"></script>
```


Usage
-----

http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript

```js
var Address = require('cryptocoin-address-btc')
var conv = require('cryptocoin-convert-hex')

var hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"
var address = new Address(conv.hexToBytes(hash160), 'prod') //'testnet is also valid'
console.log(address.toString()) //16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS
```


Credits
-------

Most of the code from Stefan Thomas in https://github.com/bitcoinjs/bitcoinjs-lib with modifications from Roman Shtylman


License
-------

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>

