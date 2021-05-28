const { version } = require("../package.json");
// const mainnet = require("./tokens/mainnet.json");
// const ropsten = require("./tokens/ropsten.json");
// const rinkeby = require("./tokens/rinkeby.json");
// const goerli = require("./tokens/goerli.json");
// const kovan = require("./tokens/kovan.json");
const harmony_mainnet = require("./tokens/harmony-mainnet.json");
// const harmony_testnet = require("./tokens/harmony-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Hashparty Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://s3-us-west-1.amazonaws.com/tokens.mochiswap.io/images/hashparty-logo-sm.png",
    keywords: ["hashparty", "mochiswap", "default"],
    tokens: [...harmony_mainnet]
    .sort((t1, t2) => {
      if (t1.chainId === t2.chainId) {
        return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
      }
      return t1.chainId < t2.chainId ? -1 : 1;
    }),
  };
};


// tokens: [...mainnet, ...ropsten, ...goerli, ...kovan, ...rinkeby, ...harmony_mainnet, ...harmony_testnet]
// sort them by symbol for easy readability