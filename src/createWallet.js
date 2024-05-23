// mateusdang 
// Importando as dependencias 
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// Definir a Rede 
// bitcoin - rede principal
// testnet - rede test 
const network = bitcoin.networks.testnet

// Derivação de carteiras HD
// testnet `m/49'/1'/0'/0`
// mainnet 'm/49'/0'/0'/0'
const path = `m/49'/1'/0'/0`

// Criando as frases
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network) 

// Criando uma conta - par Priv-Pub Keys
let account = root.derivePath(path)

let node = account.derive(0).derive(0)

// Criando o endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: Node.pubkey,
    network: network,
}).address

console.log("Carteira Gerada")
console.log("Endereço:", btcAddress)
console.log("Chave Privada:", node.toWIF())
console.log("Seed:", mnemonic)