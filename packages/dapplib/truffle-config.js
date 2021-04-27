require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note soap coconut grace lonely equal gift'; 
let testAccounts = [
"0x1617e5c328f812bdb25c4dbd6f8af39c4cf322229e8d25aa6ef988c374b4f747",
"0x35f31343998742617d850ad66459cfe38aa5f46910a1aac4db8e514d4968627b",
"0x8a24fe98feaafac9eb1d82e0b13afc60f38d69d240c0464b139e7e6b7efc943b",
"0x590a33601a3df895e767c03daa4ccca2daf408a4ed105c94280c3abd9e81dc4c",
"0xd4f27f1447af6744c600e1ef3a253b9e9c32a225aaad1ca9083632e053085848",
"0x9db4b2b1c10df87d41316eda458b44e121f8d22d6c7d4ef9374f739596118e0e",
"0xb4077f98d74b706a052197f64a01d406eeaaf988ce4a28577d630953ba8afc8e",
"0xd9a1496127622ee58c81288ec9f845a631e44f5c13cbcd5f11c94de486176013",
"0x9a7f527b9c3a8a7e67377fcd4c717d723e8ebcb00a7ae00b8cac92c8e831e58e",
"0x27b198d79c49c6a0ed16a23ac4f20ed7c65873dded2262f3fd6b6c9bb7e94030"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
