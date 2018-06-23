const _safecoinAssetChains = [
  'SUPERNET',
  'REVS',
  'PANGEA',
  'DEX',
  'JUMBLR',
  'BET',
  'CRYPTO',
  'COQUI',
  'HODL',
  'MSHARK',
  'BOTS',
  'MGW',
  'MVP',
  'KV',
  'CEAL',
  'MESH',
  'WLC',
  'MNZ',
  'AXO',
  'ETOMIC',
  'BTCH',
  'BEER',
  'PIZZA',
  'OOT',
  'NINJA',
  'VOTE2018',
  'GLXT',
  'EQL',
  'BNTN',
  'PRLPAY',
  'CHAIN'
];

const _safecoinCoins = _safecoinAssetChains.concat([
  'CHIPS',
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
  KV: 'http://kv.explorer.fairexchange.org',
  OOT: 'http://explorer.utrum.io',
  BNTN: 'http://chain.blocnation.io',
  CHAIN: 'http://explorer.chainmakers.co',
  GLXT: 'http://glx.info',
  PRLPAY: 'http://explorer.prlpay.com',
  MSHARK: 'http://MSHARK.explorer.supernet.org',
  REVS: 'http://revs.explorer.supernet.org',
  SUPERNET: 'http://SUPERNET.explorer.supernet.org',
  DEX: 'http://DEX.explorer.supernet.org',
  PANGEA: 'http://PANGEA.explorer.supernet.org',
  JUMBLR: 'http://JUMBLR.explorer.supernet.org',
  BET: 'http://BET.explorer.supernet.org',
  CRYPTO: 'http://CRYPTO.explorer.supernet.org',
  HODL: 'http://HODL.explorer.supernet.org',
  SHARK: 'http://SHARK.explorer.supernet.org',
  BOTS: 'http://BOTS.explorer.supernet.org',
  MGW: 'http://MGW.explorer.supernet.org',
  WLC: 'http://WIRELESS.explorer.supernet.org',
  CHIPS: 'http://CHIPS1.explorer.supernet.org',
  COQUI: 'https://explorer.coqui.cash',
  EQL: 'http://178.62.240.191',
  MNZ: 'https://www.mnzexplorer.com',
  BTCH: 'http://www.btch.host',
  BTC: 'https://blockchain.info',
  HUSH: 'https://explorer.myhush.org',
  PIZZA: 'http://pizza.komodochainz.info',
  BEER: 'http://beer.komodochainz.info',
  NINJA: 'https://explorer.fund.ninja',
  VOTE2018: 'http://88.99.226.252',
  QTUM: 'https://explorer.qtum.org',
  DNR: 'http://denarius.name',
  LTC: 'https://live.blockcypher.com/ltc/tx/',
  DOGE: 'https://live.blockcypher.com/doge/tx/',
  DASH: 'https://live.blockcypher.com/dash/tx/',
  MONA: 'https://bchain.info/MONA',
  VIA: 'https://explorer.viacoin.org',
  VTC: 'http://explorer.vertcoin.info',
  NMC: 'https://namecha.in',
  DGB: 'https://digiexplorer.info',
  CRW: 'http://ex.crownlab.eu',
  ABY: 'http://explorer.artbyte.me',
  GAME: 'https://blockexplorer.gamecredits.com/transactions/',
  MAC: 'http://explorer.machinecoin.org',
  IOP: 'http://mainnet.iop.cash',
  BTG: 'https://btgexplorer.com',
  BCH: 'https://bitcoincash.blockexplorer.com',
  ZCL: 'http://explorer.zclmine.pro',
  SNG: 'https://explorer.snowgem.org/',
  ZMY: 'https://myriadexplorer.com',
  BTX: 'http://explorer.bitcore.cc',
  BTCZ: 'https://explorer.bitcoinz.site',
  HODLC: 'http://www.fuzzbawls.pw/explore/HOdlcoin/tx.php?tx=',
  SIB: 'https://chain.sibcoin.net/en/tx/',
  ZEC: 'https://explorer.zcha.in/transactions/',
  BLK: 'https://explorer.coinpayments.net/transaction.php?chain=4&hash=',
  ARG: 'https://prohashing.com/explorer/Argentum/',
  FAIR: 'https://chain.fair.to/transaction?transaction=',
  CRAVE: 'http://explorer.craveproject.net',
  FTC: 'https://explorer.feathercoin.com',
  NLG:  'https://guldenchain.com',
  PIVX: 'http://www.presstab.pw/phpexplorer/PIVX/tx.php?tx=',
  DMD: 'https://chainz.cryptoid.info/dmd/search.dws?q=',
  EFL: 'https://chainz.cryptoid.info/efl/search.dws?q=',
  BSD: 'https://chainz.cryptoid.info/bsd/search.dws?q=',
  ERC: 'https://chainz.cryptoid.info/erc/search.dws?q=',
  SYS: 'https://chainz.cryptoid.info/sys/search.dws?q=',
  EMC2: 'https://chainz.cryptoid.info/emc2/search.dws?q=',
  IXC: 'https://chainz.cryptoid.info/ixc/search.dws?q=',
  DGC: 'https://chainz.cryptoid.info/dgc/search.dws?q=',
  VOX: 'http://206.189.74.116:3001',
  AUR: 'http://insight.auroracoin.is',
  LBC: 'https://explorer.lbry.io',
  ACC: 'http://explorer.getadcoin.com:5000',
  VIVO: 'http://vivo.explorerz.top:3003',
  GBX: 'http://explorer.gobyte.network:5001',
  FJC: 'http://explorer.fujicoin.org',
  LINX: 'http://explorer.mylinx.io/?',
  CDN: 'https://explorer.canadaecoin.ca',
  FLASH: 'https://explorer.flashcoin.io'
};

const explorerListExt = {
  DEX: 'http://dex.explorer.safecoin.services',
  SUPERNET: 'http://fairexchange.explorer.safecoin.services',
};

module.exports = {
  isSafecoinCoin,
  explorerList,
  explorerListExt,
  safeAssetChains: _safecoinAssetChains,
  safeCoins: _safecoinCoins, // all coins that share R-addresses
};