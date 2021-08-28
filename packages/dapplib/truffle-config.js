require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict hero force spot toy note oil puppy half kiwi sunset slim'; 
let testAccounts = [
"0x31bf74dcef02292d9dff93fbae360919f6b2306a75f3e11047836661409b77b4",
"0xa350e3525f9ea658505983b7cf917e73de10e41c44ac30155f569a910ae1aafd",
"0x2024acf6bb62cbc1d76349a380396a0eef6439c3a0fef67eb7042d2e2a38c612",
"0xd87c856dabb51568da91d286f550cc03eb7151a7426f2778c1d5b7d8cec5bdfe",
"0xcc6fddb1dc820b47eb1d88a5dbddc61db2a7c92a4f89bd13e26fbf86e93722e6",
"0x82b62cf5452b00aac41d33c4b939b2448fcb4195109eb8103d0b4b76daa4f7dc",
"0x0bbbd3bdcad228539c05e8fbc62628beb526ef8eeda05dcb7271e93a78123ca2",
"0xd11e8ce18ea841c05a11f11b858c81f2c87c9babc747fa59577fd5ad42ceb8bd",
"0xa6e4b52838b5eddc3e340d7b2af99b3afc918b9dc653784bf8bb1a5553f4ca6b",
"0xd6379635234c4a7cc269b4f73879f95f67e5462c77f57ac37ed5941ee3bc4e71"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


