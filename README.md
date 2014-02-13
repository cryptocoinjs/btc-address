Bitcoin Address
===============

JavaScript component to handle Bitcoin addresses.

AMD/CommonJS compatible.

See this article for more details: [bitcoin address](http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript).

See for more modifications: https://github.com/vbuterin/bitcoinjs-lib/blob/master/src/address.js


Install
-------

### Node.js/Browserify

    npm install --save btc-address

### Component

    component install cryptocoinjs/btc-address


### Bower

    bower install btc-address


### Script

```html
<script src="/path/to/btc-address.js"></script>
```


Usage
-----

http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript

```js
var Address = require('btc-address')
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


