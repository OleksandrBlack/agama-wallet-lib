const _safecoinAssetChains = [];

const _safecoinCoins = _safecoinAssetChains.concat([
  'SAFE',
  'SAFECOIN'
]);

const isSafecoinCoin = (coin, skipSAFE) => {
  return (_safecoinCoins.find((element) => {
    if (skipSAFE) {
      return element === coin.toUpperCase() && coin.toUpperCase() !== 'SAFE' && coin.toUpperCase() !== 'SAFECOIN';
    } else {
      return element === coin.toUpperCase();
    }
  }));
}

// TODO: add at least 2 explorers per coin
const explorerList = {
  SAFE: 'https://explorer.safecoin.org',
  // SAFE asset chains

  // non-safe coins
  BTG: 'https://btgexplorer.com',
  BCH: 'https://bitcoincash.blockexplorer.com',
  ZCL: 'http://explorer.zclmine.pro',
  SNG: 'https://explorer.snowgem.org/',
  BTCZ: 'https://explorer.bitcoinz.site',
  ZEC: 'https://explorer.zcha.in/transactions/',
};

//const explorerListExt = {
//  DEX: 'http://dex.explorer.safecoin.services',
//  SUPERNET: 'http://supernet.explorer.safecoin.services',
//};

module.exports = {
  isSafecoinCoin,
  explorerList,
//  explorerListExt,
  safeAssetChains: _safecoinAssetChains,
  safeCoins: _safecoinCoins, // all coins that share R-addresses
};
