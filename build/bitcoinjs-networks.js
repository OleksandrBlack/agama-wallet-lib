'use strict';

var _networks;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  Bitcoinjs-lib network params file
*/

// TODO: runtime extend for safe assets

var bitcoin = require('bitcoinjs-lib');

var networks = (_networks = {
  btc: bitcoin.networks.bitcoin,
  safe: {
    messagePrefix: '\x19Safecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21f,
      private: 0x0488ade5
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x56,
    wif: 0xbd,
    dustThreshold: 1000,
    isZcash: true,
    safeInterest: true
  },
  btg: {
    messagePrefix: '\x19BitcoinGold Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x17,
    wif: 0x80,
    dustThreshold: 1000,
    forkName: 'btg',
    isBtcFork: true
  },
  bch: {
    messagePrefix: '\x19BitcoinCash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
    forkName: 'bch',
    isBtcFork: true
  },
  zec: {
    messagePrefix: '\x19Zcash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  hush: {
    messagePrefix: '\x19Hush Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  zcl: {
    messagePrefix: '\x19Zclassic Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  sng: {
    messagePrefix: '\x19Snowgem Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2D,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  btcz: {
    messagePrefix: '\x19BitcoinZ Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  vot: {
    messagePrefix: '\x19VoteCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  },
  btcp: {
    messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13AF,
    wif: 0x80,
    dustThreshold: 1000
    // isZcash: true,
  },
  // https://github.com/zencashio/zen/blob/master/src/chainparams.cpp#L118
  zen: { // new address type
    messagePrefix: '\x19Zencas Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x2089,
    scriptHash: 0x2086,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true
  }, _networks);

module.exports = networks;