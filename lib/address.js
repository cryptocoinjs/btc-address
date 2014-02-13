var sha256 = require('crypto-hashing').sha256;
var base58 = require('bs58');

module.exports = Address;
Address.defaultNetwork = 'mainnet';

var addressTypes = {
  pubkeyhash: {
    mainnet: 0,
    testnet: 111
  },
  scripthash: {
    mainnet: 5,
    testnet: 196
  }
};

var versionBytes = {
  mainnet: {
    0: 'pubkeyhash',
    5: 'scripthash'
  },
  testnet: {
    111: 'pubkeyhash',
    196: 'scripthash'
  }
};

function Address(bytes, network, addressType) {
  if (typeof bytes === 'string') {
    this.decodeString(bytes, network, addressType);
  } else {
    this.hash = bytes;
    // default to pubkeyhash
    this.version = addressTypes[addressType || 'pubkeyhash'][network || Address.defaultNetwork];
  }
}

/**
 * Serialize this object as a standard Bitcoin address.
 *
 * Returns the address as a base58-encoded string in the standardized format.
 */
Address.prototype.toString = function() {
  // Get a copy of the hash
  var hash = this.hash.slice(0);

  // Version
  hash.unshift(this.version);

  var checksum = sha256.x2(hash, { in : 'bytes',
    out: 'bytes'
  });

  var bytes = hash.concat(checksum.slice(0, 4));

  return base58.encode(bytes);
};

Address.validateType = function(version, network, addressType) {
  return (version === addressTypes[addressType][network || Address.defaultNetwork])
}

Address.validate = function(string, network, addressType) {
  try {
    new Address(string, network, addressType)
  } catch (err) {
    return false
  }
  return true
};

/**
 * Parse a Bitcoin address contained in a string.
 */
// network is optional
Address.prototype.decodeString = function(string, network) {
  var bytes = base58.decode(string);

  var hash = bytes.slice(0, 21);

  //var checksum = sha256(sha256(hash, {asBytes: true}), {asBytes: true});
  var checksum = sha256.x2(hash, { in : 'bytes',
    out: 'bytes'
  });

  if (checksum[0] != bytes[21] ||
    checksum[1] != bytes[22] ||
    checksum[2] != bytes[23] ||
    checksum[3] != bytes[24]) {
    throw new Error('Address Checksum validation failed: ' + string);
  }

  var version = hash.shift();
  var addressType = versionBytes[network || Address.defaultNetwork][version]
  if (!Address.validateType(version, network, addressType)) {
    throw new Error('Address version (' + version + ') not supported: ' + string +
      ' for ' + addressType);
  }

  this.hash = hash;
  this.version = version;
};

Address.prototype.getType = function(network) {
  return versionBytes[network || Address.defaultNetwork][this.version]
}
