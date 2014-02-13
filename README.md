Bitcoin Address
===============

JavaScript component to handle Bitcoin addresses.

See this article for more details: [bitcoin address](http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript).



Install
-------

### Node.js/Browserify

    npm install --save btc-address



Usage
-----

```js
var Address = require('btc-address')
var binConv = require('binstring')


var hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8";
var address = new Address(binConv(hash160, { in : 'hex', out: 'bytes'})); 
console.log(address.toString()) //16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS
```


Credits
-------

Most of the code from Stefan Thomas in https://github.com/bitcoinjs/bitcoinjs-lib with modifications from Roman Shtylman


License
-------

(MIT License)


