'use strict';

var _safecoinAssetChains = [];

var _safecoinCoins = _safecoinAssetChains.concat(['SAFE', 'SAFECOIN']);

var isSafecoinCoin = function isSafecoinCoin(coin, skipSAFE) {
  return _safecoinCoins.find(function (element) {
    if (skipSAFE) {
      return element === coin.toUpperCase() && coin.toUpperCase() !== 'SAFE' && coin.toUpperCase() !== 'SAFECOIN';
    } else {
      return element === coin.toUpperCase();
    }
  });
};

// TODO: add at least 2 explorers per coin
var explorerList = {
  SAFE: 'https://explorer.safecoin.org',
  // SAFE asset chains

  // non-safe coins

  BTG: 'https://btgexplorer.com',
  ZCL: 'http://explorer.zclmine.pro',
  SNG: 'https://explorer.snowgem.org/',
  BTCZ: 'https://explorer.bitcoinz.site',
  ZEC: 'https://explorer.zcha.in/transactions/',

};

//var explorerListExt = {
//  DEX: 'http://dex.explorer.komodo.services',
//  SUPERNET: 'http://supernet.explorer.komodo.services'
//};

module.exports = {
  isSafecoinCoin: isSafecoinCoin,
  explorerList: explorerList,
//  explorerListExt: explorerListExt,
  safeAssetChains: _safecoinAssetChains,
  safeCoins: _safecoinCoins // all coins that share R-addresses
};