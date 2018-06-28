/*
  Bitcoinjs-lib network params file
*/

// TODO: runtime extend for safe assets

const bitcoin = require('bitcoinjs-lib');

let networks = {
  btc: bitcoin.networks.bitcoin,
  ltc: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    dustThreshold: 0 // https://github.com/litecoin-project/litecoin/blob/v0.8.7.2/src/main.cpp#L360-L365
  },
  
// https://github.com/Fair-Exchange/safecoin/blob/master/src/chainparams.cpp
  safecoin: {
  messagePrefix: '\x19Safecoin Signed Message:\n',
  bip32: {
    public: 0x0488b21f,
    private: 0x0488ade5,
  },
  pubKeyHash: 0x3d,
  scriptHash: 0x56,
  wif: 0xbd,
  dustThreshold: 1000,
  isZcash: true,
},

xsg: {
  messagePrefix: '\x19Snowgem Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x05358394,
  },
  pubKeyHash: 0x1c28,
  scriptHash: 0x1c2D,
  wif: 0x80,
  dustThreshold: 1000,
  isZcash: true,
},

btcz: {
  messagePrefix: '\x19BitcoinZ Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1cb8,
  scriptHash: 0x1cbd,
  wif: 0x80,
  dustThreshold: 1000,
  isZcash: true,
},

cmm: {
  messagePrefix: '\x19Commercium Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1c,
  scriptHash: 0x32,
  wif: 0x8c,
  dustThreshold: 1000,
  isZcash: true,
},
};

module.exports = networks;
