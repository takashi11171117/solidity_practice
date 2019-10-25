import web3 from './web3'

const address = '0x0aE26482Ca20f942c1b5dEcaf11D9bC004181968'

const abi = [{
  "constant": true,
  "inputs": [],
  "name": "manager",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0x481c6a75"
}, {
  "constant": false,
  "inputs": [],
  "name": "pickWinner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function",
  "signature": "0x5d495aea"
}, {
  "constant": true,
  "inputs": [],
  "name": "getPlayers",
  "outputs": [{
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0x8b5b9ccc"
}, {
  "constant": false,
  "inputs": [],
  "name": "enter",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function",
  "signature": "0xe97dcb62"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "players",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0xf71d96cb"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor",
  "signature": "constructor"
}];

export default new web3.eth.Contract(abi, address);