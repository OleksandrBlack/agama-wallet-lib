const electrumServers = {
  safe: {
    txfee: 10000,
    serverList: [
      'local.support:10001:tcp',
      'electrum.safc.cc:10001:tcp',
    ],
  },
  btg: {
    txfee: 10000,
    serverList: [
      'electrum1.cipig.net:10052:tcp',
      'electrum2.cipig.net:10052:tcp',
      'electrum3.cipig.net:10052:tcp'
    ],
  },
  zec: {
    txfee: 10000,
    serverList: [
      'electrum1.cipig.net:10058:tcp',
      'electrum2.cipig.net:10058:tcp'
    ],
  },
  hush: {
    txfee: 10000,
    serverList: [
      'electrum1.cipig.net:10064:tcp',
      'electrum2.cipig.net:10064:tcp'
    ],
  },
  sng: {
    txfee: 10000,
    serverList: [
      'electrumsvr.snowgem.org:50001:tcp',
      'electrumsvr2.snowgem.org:50001:tcp',
      'electrumsvr.snowgem.org:50002:ssl',
      'electrumsvr2.snowgem.org:50002:ssl'
    ],
  },
  zcl: {
    txfee: 1000,
    serverList: [
      'local.support:40001:tcp'
    ],
  },
  btcz: {
    txfee: 10000,
    serverList: [
      'local.support:10002:tcp',
      'electrum.safc.cc:10002:tcp'
    ],
  },
  btcp: {
    txfee: 10000,
    serverList: [
      'electrum.btcprivate.org:5222:tcp',
      'electrum2.btcprivate.org:5222:tcp'
    ],
  },
};

module.exports = electrumServers;