const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "orange apple banana ...";

module.exports = {
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://blue-dawn-flower.kovan.quiknode.pro/1249e3621530ecd35d0b9205ee40404adf616c44/")
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 1
    }
  }
};
